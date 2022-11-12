import React, { useContext } from 'react'
import axios from 'axios';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom'
import { LAMPORTS_PER_SOL, Connection, Transaction, SystemProgram, PublicKey, clusterApiUrl, sendAndConfirmTransaction } from "@solana/web3.js";

import * as web3 from '@solana/web3.js';
import * as buffer from "buffer";

import UserContext from '../common/UserContext';
import { API_URL } from '../../config/api';


// const transfer = async () => {
//     window.Buffer = buffer.Buffer;

//     // This line ensures the function returns before running if no account has been set
//     // if (!account) return;

//     try {


//         // (a) review the import guidance on line 1
//         // (b) instantiate a connection using clusterApiUrl with the active network passed in as an argument
//         // Documentation References:
//         //   https://solana-labs.github.io/solana-web3.js/classes/Connection.html
//         //   https://solana-labs.github.io/solana-web3.js/modules.html#clusterApiUrl
//         var provider = await getProvider();

//         const connection = new web3.Connection(
//             web3.clusterApiUrl('devnet'),
//             'confirmed',
//         );

//         // Generate key pair
//         var fromWallet = web3.Keypair.generate();
//         var toWallet = web3.Keypair.generate();
//         const fromPublicKey = new web3.PublicKey("3hYY631EyeYYkkH2t1Wmat4z8UTuMAaf8NxTtWtraGNy");
//         const instructions = SystemProgram.transfer({
//             fromPubkey: fromPublicKey,
//             toPubkey: toWallet.publicKey,
//             lamports: LAMPORTS_PER_SOL,
//         });
//         // (d) instantiate a transaction object and add the instructions
//         // Documentation Reference:
//         //   https://solana-labs.github.io/solana-web3.js/classes/Transaction.html
//         //   https://solana-labs.github.io/solana-web3.js/classes/Transaction.html#add
//         const transaction = new Transaction().add(instructions);

//         transaction.feePayer = await fromPublicKey;
//         let blockhashObj = await connection.getRecentBlockhash();
//         transaction.recentBlockhash = await blockhashObj.blockhash;
//         if (transaction) {
//             console.log("Txn created successfully");
//         }

//         let signed = await provider.signTransaction(transaction);
//         console.log("ggeg");

//         // Sign transaction, broadcast, and confirm
//         let signature = await connection.sendRawTransaction(signed.serialize());
//         // Confirm whether the transaction went through or not
//         await connection.confirmTransaction(signature);

//         console.log('SIGNATURE', signature);

//         // balanace = await connection.getBalance(fromWallet.publicKey);
//         // (g) You can now delete the console.log statement since the function is implemented!
//     } catch (error) {
//         console.log("error", error);
//         // const errorMessage =
//         //     error instanceof Error ? error.message : "Unknown Error";
//         // message.error(
//         //     `Transaction failed, please check your inputs: ${errorMessage}`
//         // );
//         // setSending(false);
//     }
// };
const getProvider = async () => {
    if ("solana" in window) {

        // opens wallet to connect to
        await window.solana.connect();

        const provider = window.solana;
        if (provider.isPhantom) {
            console.log("Is Phantom installed?  ", provider.isPhantom);
            return provider;
        }
    } else {
        window.open("https://www.phantom.app/", "_blank");
    }
};
function JobItem(props) {
    const userContext = useContext(UserContext);
    let navigate = useNavigate();
    const profile = userContext.profile;
    const walletAddress = profile.walletAddress;
    const msg = '';
    const addTransferInfo = async (e) => {

        window.Buffer = buffer.Buffer;

        // This line ensures the function returns before running if no account has been set
        // if (!account) return;

        try {


            // (a) review the import guidance on line 1
            // (b) instantiate a connection using clusterApiUrl with the active network passed in as an argument
            // Documentation References:
            //   https://solana-labs.github.io/solana-web3.js/classes/Connection.html
            //   https://solana-labs.github.io/solana-web3.js/modules.html#clusterApiUrl
            var provider = await getProvider();

            const connection = new web3.Connection(
                web3.clusterApiUrl('devnet'),
                'confirmed',
            );

            // Generate key pair
            var fromWallet = web3.Keypair.generate();
            var toWallet = web3.Keypair.generate();

            const fromPublicKey = new web3.PublicKey(profile.walletAddress);
            const toPublicKey = new web3.PublicKey("ZTqtHLtMsoMt5awq81uCxefc6xBCR7pUMTqB7nYCuuj");
            const instructions = SystemProgram.transfer({
                fromPubkey: fromPublicKey,
                toPubkey: toPublicKey,
                lamports: parseInt(props.price) * LAMPORTS_PER_SOL,
            });
            // (d) instantiate a transaction object and add the instructions
            // Documentation Reference:
            //   https://solana-labs.github.io/solana-web3.js/classes/Transaction.html
            //   https://solana-labs.github.io/solana-web3.js/classes/Transaction.html#add
            const transaction = new Transaction().add(instructions);

            transaction.feePayer = await fromPublicKey;
            let blockhashObj = await connection.getRecentBlockhash();
            transaction.recentBlockhash = await blockhashObj.blockhash;
            if (transaction) {
                console.log("Txn created successfully");
            }

            let signed = await provider.signTransaction(transaction);

            // Sign transaction, broadcast, and confirm
            let signature = await connection.sendRawTransaction(signed.serialize());

            // Confirm whether the transaction went through or not
            await connection.confirmTransaction(signature);

            console.log('SIGNATURE', signature);
            if (profile._id == null || profile._id == undefined || profile.walletAddress == null || profile.walletAddress == undefined || profile.walletAddress.length < 10) {
                alert("Your wallet address does not exist!");
            } else {
                e.preventDefault();
                axios.post(`${API_URL}/job_transfer/addInfo`, {
                    fromAddress: profile.walletAddress,
                    fromUsername: profile.username,
                    toAddress: props.walletAddress,
                    toUsername: props.username,
                    price: props.price,
                    job_id: props.id
                })
                    .then(res => {
                        console.log(res);
                        alert('Transfer Info was added!');

                        const id = props.id;
                        axios.post(`${API_URL}/job/updateJob/${id}`, {
                            clientUsername: profile.username,
                            clientAvatar: profile.avatar,
                            contact: 'pending'
                        })
                            .then(res => {
                                console.log(res);
                                alert('Transfer Info was updated!');
                            })
                            .catch(err => {
                                console.log(err);
                            })

                    })
                    .catch(err => {
                        console.log(err);
                    })

            }
            // balanace = await connection.getBalance(fromWallet.publicKey);
            // (g) You can now delete the console.log statement since the function is implemented!
        } catch (error) {
            console.log("error", error);
            // const errorMessage =
            //     error instanceof Error ? error.message : "Unknown Error";
            // message.error(
            //     `Transaction failed, please check your inputs: ${errorMessage}`
            // );
            // setSending(false);
        }
    }
    const toJobProfile = (e) => {
        e.preventDefault();
        navigate('/job_profile', { state: props.id });
    }
    const id = props.creator;
    const addConnection = (e) => {

        e.preventDefault();
        // axios.post(`${API_URL}/userProfile/updateUserProfile/addConnection/${profile._id}`, {
        //     creator_id: id
        // })
        //     .then(
        axios.post(`${API_URL}/msg/addMsgHim`, {
            owner: id,
            msg: msg,
            opponent: profile._id,
            direction: 'come'
        })
            .then(
                axios.post(`${API_URL}/msg/addMsgMe`, {
                    owner: profile._id,
                    msg: msg,
                    opponent: id,
                    direction: 'go'
                })
                    .then(
                        axios.post(`${API_URL}/userProfile/updateUserProfile/addConnection/${id}`, {
                            creator_id: profile._id
                        })
                            .then(
                                axios.post(`${API_URL}/userProfile/updateUserProfile/addConnection/${profile._id}`, {
                                    creator_id: id
                                })
                                    .then(res => {
                                        navigate("/messages");
                                    })
                                    .catch(err => {
                                        console.log(err);
                                        // alert(err);

                                        navigate("/messages");
                                    })
                            )
                    )
                    .catch(err => {
                        console.log(err);
                        navigate("/messages");
                    }))
            .catch(err => {
                console.log(err);
                navigate("/messages");
            })
        // )
        // .catch(err => {
        //     alert('error1');
        //     navigate("/messages");
        // })
    }



    return (
        <div className={props.col}>
            <a onClick={toJobProfile} >
                <div className={classNames('shadow-sm rounded bg-white job-item mb-3', props.border)}>
                    <div className="d-flex align-items-center p-3 job-item-header">
                        <div className="overflow-hidden mr-2">
                            <h6 className="font-weight-bold text-dark mb-0 text-truncate">{props.title}</h6>
                            <div className="text-truncate text-primary">{props.company}</div>
                            <div className="small text-gray-500"><i className="feather-map-pin"></i>{props.location}</div>
                        </div>
                        {/* <img className="img-fluid ml-auto" src={props.img} alt="" /> */}
                        <div className='ml-auto'>
                            <div className='center'>
                                <img className="img-fluid " src={props.avatar} alt="" />
                            </div>
                            <p className='mb-0 text-dark ta-center'>{props.username}</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center p-3 border-top border-bottom job-item-body">
                        <div className="overlap-rounded-circle d-flex col-1">
                            {props.contact == 'pending' || props.contact == 'approved' ? <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="" src={props.clientAvatar} alt="" /> : null}
                        </div>
                        {props.contact == 'pending' || props.contact == 'approved' ?
                            <div className='col-8 p-0 d-flex'>
                                <p className=" mb-0 text-dark text-truncate"> {props.clientUsername} </p><i className="feather-chevrons-right fs-18"></i>
                            </div> : null}
                        <p className="ml-auto mb-0 text-truncate">{props.price} SOL</p>
                    </div>
                    <div className="p-3 job-item-footer d-flex">

                        <div className="col-7 p-0">
                            <small className="text-gray-500"><i className="feather-clock"></i> {props.createdAt}</small>
                        </div>
                    </div>
                </div>
            </a>
            <div className="col-5 p-0 ml-auto">
                <a className="text-truncate text-primary send-msg-btn" onClick={addConnection}>Send messages...</a>
                {props.contact == 'none' || props.contact == 'denied' ?
                    <button type="button" className="btn btn-outline-primary btn-sm btn-block offer-btn" onClick={addTransferInfo}> <i className="feather-user-plus"></i> Offer </button> : null}
                {props.contact == 'approved' ?
                    <p className=" mb-0 text-truncate font-weight-bold allowed-color offer-btn"><i className="feather-check-square"></i>  Approved</p> : null}
                {props.contact == 'pending' ?
                    <p className=" mb-0 text-truncate text-dark font-weight-bold offer-btn"><i className="feather-cast"></i>  Pending...</p> : null}
                {/* {props.contact == 'denied' ? 
                            <p className="ml-auto mb-0 text-truncate "> {props.contact}</p> : null } */}
            </div>
        </div>
    );
}

export default JobItem;