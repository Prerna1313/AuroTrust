module auro_donation::simple_donation {
    use std::signer;
    use aptos_framework::coin;
    use aptos_framework::aptos_coin::AptosCoin;

    /// Simple direct donation function
    public entry fun donate(
        donor: &signer,
        recipient: address,
        amount: u64,
    ) {
        coin::transfer<AptosCoin>(donor, recipient, amount);
    }
}
