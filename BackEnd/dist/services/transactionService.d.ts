declare class TransactionService {
    private transactionRepository;
    constructor();
    addTransactionService: (transaction: any) => Promise<any>;
    deleteTransactionService: (id: any) => Promise<void>;
    getOneTransactionService: (id: any) => Promise<any>;
    updateOneTransactionService: (id: any, updateTransaction: any) => Promise<void>;
    getTotalIncomeAndExpenseOfOneWalletService: (id: any) => Promise<any>;
    getTotalIncomeAndExpenseService: (userId: any) => Promise<any>;
    getTotalIncomeAndExpenseByMonthService: (year: any, userId: any) => Promise<any>;
    getTotalIncomeAndExpenseByEachWalletService: (userId: any) => Promise<any>;
    getTransactionBetweenTwoDatesService: (userId: any, startDate: any, endDate: any) => Promise<any>;
    getTransactionByNoteService: (userId: any, note: any) => Promise<any>;
    getTransactionByCategoryService: (userId: any, categoryId: any) => Promise<any>;
    getTransactionByWalletService: (userId: any, walletId: any) => Promise<any>;
    getTotalExpense: (walletId: any, userId: any) => Promise<any>;
}
declare const _default: TransactionService;
export default _default;
