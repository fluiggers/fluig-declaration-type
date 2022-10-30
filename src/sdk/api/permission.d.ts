declare namespace com.fluig.sdk.api.permission {
    declare class PermissionAssetVO {
        getId(): number;
        getCode(): string;
        getDescription(): string;
        getPageCode(): string;
        getTypeCode(): string;
        setId(id: number): void;
        setCode(code: string): void;
        setDescription(description: string): void;
        setPageCode(pageCode: string): void;
        setTypeCode(typeCode: string): void;
    }

    declare class PermissionVO {
        getCategory(): string;
        getCategoryCode(): string;
        getIsSelected(): boolean;
        getPermission(): string;
        getPermissionDescription(): string;
        setCategory(category: string): void;
        setCategoryCode(categoryCode: string): void;
        setIsSelected(isSelected: boolean): void;
        setPermission(permission: string): void;
        setPermissionDescription(permissionDescription: string): void;
    }
}
