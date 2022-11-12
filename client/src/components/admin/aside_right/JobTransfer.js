import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Switch } from 'react-switch-input';
import { Keypair, LAMPORTS_PER_SOL, Connection, Transaction, SystemProgram, PublicKey, clusterApiUrl, sendAndConfirmTransaction } from "@solana/web3.js";

import * as web3 from '@solana/web3.js';
import * as bs58 from "bs58";

import * as buffer from "buffer";
import { API_URL } from '../../../config/api';

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
const JobTransfer = (props) => {

    const [id, setId] = useState(props._id);
    const [state, setState] = useState(props.state);
    const [contact, setContact] = useState();

    useEffect(() => {
        console.log(id);
        console.log(state);
        updateJobTransferState();
    }, [state])

    const updateJobTransferState = (e) => {
        axios.post(`${API_URL}/job_transfer/updateState/${id}`, {
            state: state,
        }).then(() => {
            console.log("Updated!");
            if (state !== true) {
                setContact('approved')
            } else {
                setContact('denied')
            }
            const id = props.job_id;
            axios.post(`${API_URL}/job/updateJob/${id}`, {
                contact: contact
            })
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                })

        })
            .catch(err => {
                console.log(err);
            })
    }
    const handleChange = async (e) => {
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

            // const payerKeypair = web3.Keypair.fromSecretKey(Buffer.from("rawPayerKeypair"));
            // const programId = new web3.Pubkey("CALLED_PROGRAM_ID");

            // const url = web3.clusterApiUrl("devnet");
            // const connection = new web3.Connection(url);

            // const instruction = new web3.TransactionInstruction({
            //   keys: [
            //     { pubkey: payerKeypair.publicKey, isSigner: true, isWritable: true }
            //   ],
            //   programId,
            //   // Put the transaction instruction here.
            //   data: Buffer.from([])
            // });
            // const transaction = new web3.Transaction().add(instruction);
            // const response = await web3.sendAndConfirmTransaction(connection, transaction, [payerKeypair]);
            // console.log(response);



            const fromPublicKey = new web3.PublicKey("AbJk7FwnR21yMGWvWv9RZA6Xchb6defUi4Wy5QY896j5");

            const toPublicKey = new web3.PublicKey("4o4TPNQSTFtpprXnxJwaT3pCnTjzBw4PP7uczCZtoZ8J");

            const instructions = SystemProgram.transfer({
                fromPubkey: fromPublicKey,
                toPubkey: toPublicKey,
                lamports: parseFloat(props.price) * LAMPORTS_PER_SOL,
            });
            // (d) instantiate a transaction object and add the instructions
            // Documentation Reference:
            //   https://solana-labs.github.io/solana-web3.js/classes/Transaction.html
            //   https://solana-labs.github.io/solana-web3.js/classes/Transaction.html#add
            const transaction = new Transaction().add(instructions);
            console.log("tt");
            transaction.feePayer = await fromPublicKey;
            let blockhashObj = await connection.getRecentBlockhash();
            transaction.recentBlockhash = await blockhashObj.blockhash;
            if (transaction) {
                console.log("Txn created successfully");
            }
            const _secretKey = Keypair.fromSecretKey(
                bs58.decode("2xaQFZHSHbnnBPACh72Eso31uZ9nUwRSqaczqNG1SAAGhiKLG6yvCEMz5XKdLmRn7iQgN3kGS1Xo4WEXZLQrv8Gs")
            );

            const signers = [
                {
                    publicKey: fromPublicKey,
                    secretKey: _secretKey.secretKey,
                },
            ];
            console.log("tt1");
            const confirmation = await sendAndConfirmTransaction(
                connection,
                transaction,
                signers
            );

            console.log("tt2");
            // let signed = await provider.signTransaction(transaction);

            // // Sign transaction, broadcast, and confirm
            // let signature = await connection.sendRawTransaction(signed.serialize());

            // // Confirm whether the transaction went through or not
            // await connection.confirmTransaction(signature);

            // console.log('SIGNATURE', signature);
            setState(!state);

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


    return (
        <li className="list-group-item pl-3 pr-3 d-flex align-items-center text-dark">
            <div className='col-6 p-0 d-block'>
                <div className='col-12 p-0 m-0'>
                    <span>{props.fromUsername}</span><i className="feather-chevrons-right ml-2 mr-2 text-dark"></i><span>{props.toUsername}</span>
                </div>
                {state == true ?
                    <div>
                        <div className='col-12 p-0 m-0'>
                            <span className='text-primary'>{props.toUsername}</span><i className=" feather-chevrons-left ml-2 mr-2 text-primary"></i><span className='text-primary'>{parseFloat(props.price) * 0.94} SOL</span>
                        </div>
                        <div className='col-12 p-0 m-0'>
                            <span className='text-primary'>Server</span><i className=" feather-chevrons-left ml-2 mr-2 text-primary"></i><span className='text-primary'>{parseFloat(props.price) * 0.06} SOL</span>
                        </div>
                    </div> : null}
            </div>
            <div className='col-4 p-0'>
                <span className='ml-5 mr-5'>{props.price} SOL </span>
            </div>
            <div className='col-2 p-0'>
                <span className="ml-auto font-weight-bold">
                    {state == null ? <p className='transfer-state default-color'>Pending</p> : null}
                    {state == true ? <p className='transfer-state allowed-color'>Approved</p> : null}
                    {state == false ? <p className='transfer-state blocked-color'>Denied</p> : null}
                    {/* <p className={classNames('transfer-state', state ? "allowed-color" : "blocked-color")}>{state ? "Approved" : "Denied"}</p> */}
                    <Switch name={props.i} value={state} checked={state} on={true} off={false} onChange={handleChange} />
                </span>
            </div>


        </li >
    );
}

export default JobTransfer;