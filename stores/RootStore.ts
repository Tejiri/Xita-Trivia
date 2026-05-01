import { GameSetupStore } from "./GameSetupStore";

export class RootStore {
    gameSetupStore: GameSetupStore;
    // userStore: UserStore;
    // loanApplicationStore: LoanApplicationStore;
    // transactionStore: TransactionStore;
    // accountStore: AccountStore;
    // noticeStore: NoticeStore;
    // commentStore: CommentStore;

    constructor() {
        this.gameSetupStore = new GameSetupStore();
        // this.userStore = new UserStore();
        // this.loanApplicationStore = new LoanApplicationStore();
        // this.transactionStore = new TransactionStore();
        // this.accountStore = new AccountStore();
        // this.noticeStore = new NoticeStore();
        // this.commentStore = new CommentStore();
    }

    
}
