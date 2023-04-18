const {
    Connection,
    PublicKey,
    clusterApiUrl,
    Keypair,
    LAMPORTS_PER_SOL,

}=require("@solana/web3.js")

const wallet = new Keypair();

 const publicKey = new PublicKey(wallet._keypair.publicKey)
 const secretKey = wallet._keypair.secretKey

 console.log(publicKey)
 console.log(secretKey)


 const getWalletBalance= async()=>{
    try{
        const connection = new Connection(clusterApiUrl('devnet'),'confirmed')
        const WalletBalance= await connection.getBalance(publicKey)
        console.log("wallet balance is ", WalletBalance)


    }catch(err){
        console.log(err)

    }

 }


 const airDropSol = async() =>{
    try{
        const connection = new Connection(clusterApiUrl('devnet'),'confirmed')
        const fromAirDropSignature = await connection.requestAirdrop(publicKey, 2 * LAMPORTS_PER_SOL)
        await connection.confirmTransaction(fromAirDropSignature)
        const WalletBalance= await connection.getBalance(publicKey)
        console.log("wallet balance is ", WalletBalance)

    }catch(err){
        console.log(err)
    }
 }


 const main = async() => {
    await getWalletBalance()
    await airDropSol()
 }

 main()

