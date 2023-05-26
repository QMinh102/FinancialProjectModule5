declare class TransactionService {
    private transactionRepository;
    constructor();
    addTransactionService: (transaction: any) => Promise<any>;
    deleteTransactionService: (id: any) => Promise<void>;
    getOneTransactionService: (id: any) => Promise<any>;
    updateOneTransactionService: (id: any, updateTransaction: any) => Promise<void>;
}
declare const _default: TransactionService;
export default _default;
