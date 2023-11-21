declare namespace com.fluig.sdk.tenant {
    declare class AdminUserVO {
        /**
         * Recupera valor do code
         */
        getCode(): java.lang.String;

        /**
         * Recupera valor do email
         */
        getEmail(): java.lang.String;

        /**
         * Recupera valor do firstName
         */
        getFirstName(): java.lang.String;

        /**
         * Recupera valor do lastName
         */
        getLastName(): java.lang.String;

        /**
         * Recupera valor do login
         */
        getLogin(): java.lang.String;
    }

    declare class TenantVO {
        /**
         * Recupera valor do adminUser
         */
        getAdminUser(): AdminUserVO;

        /**
         * Recupera valor do Tenant Code
         */
        getCode(): java.lang.String;

        /**
         * Recupera valor do data
         */
        getData(): java.util.Map<java.lang.String, java.lang.String>

        /**
         * Recupera valor do description
         */
        getDescription(): java.lang.String;

        /**
         * Recupera valor do federalId
         */
        getFederalId(): java.lang.String;

        /**
         * Recupera valor do id
         */
        getId(): number;

        /**
         * Recupera valor do idpId
         */
        getIdpId(): java.lang.String;

        /**
         * Recupera valor do idpLogOff
         */
        getIdpLogOff(): boolean;

        /**
         * Recupera valor do organizationUrl
         */
        getOrganizationUrl(): java.lang.String;

        /**
         * Recupera valor do removeVolume
         */
        getRemoveVolume(): boolean;

        /**
         * Recupera o valor para tenantActive
         */
        getTenantActive(): boolean;

        /**
         * Recupera valor do thumbnailEnabled
         */
        getThumbnailEnabled(): boolean;

        /**
         * Recupera valor do volumeDir
         */
        getVolumeDir(): java.lang.String;
    }
}
