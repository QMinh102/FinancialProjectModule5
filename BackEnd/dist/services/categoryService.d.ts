declare class CategoryService {
    private categoryRepository;
    constructor();
    getAll: () => Promise<any>;
    getOne: (id: any) => Promise<any>;
    create: (newCategory: any) => Promise<void>;
    update: (id: any, newCategory: any) => Promise<void>;
}
declare const _default: CategoryService;
export default _default;
