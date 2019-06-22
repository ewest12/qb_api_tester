//constants
realm = 'https://yourrealmname.quickbase.com';
apptoken = 'your app token';
usertoken = 'your user token';

http_req_types = ['POST', 'GET', 'PUT', 'DELETE', 'PATCH'];

data_formats = ['XML', 'JSON'];



//api call parameters
API_GetRecordInfo =
    {
        name: 'API_GetRecordInfo',
        func_cat: 'Record (data) management',
        refType: 'Table ID',
        parameters: {
            rid: {
                val: '',
                req: true
            },
            ticket: {
                val: '',
                req: false
            },
            usertoken: {
                val: usertoken,
                req: true
            },
            apptoken: {
                val: apptoken,
                req: true
            },
            udata: {
                val: '',
                req: false
            }
        }
    }

API_GetSchemaInfo =
    {
        name: 'API_GetSchema',
        func_cat: 'Application and table metadata',
        refType: 'Table ID or App ID',
        parameters: {
            ticket: {
                val: '',
                req: false
            },
            usertoken: {
                val: usertoken,
                req: true
            },
            apptoken: {
                val: apptoken,
                req: true
            },
            udata: {
                val: '',
                req: false
            }
        }
    }

api_choices = [API_GetRecordInfo, API_GetSchemaInfo];

//API select parameters
/*api_choices = [
    'API_FindDBByName',
    'API_GetAncestorInfo',
    'API_GetAppDTMInfo',
    'API_GetDBInfo',
    'API_GetSchema',
    'API_GrantedDBs',
    'API_CloneDatabase',
    'API_CreateDatabase',
    'API_DeleteDatabase',
    'API_RenameApp',
    'API_AddRecord',
    'API_EditRecord',
    'API_UploadFile',
    'API_Authenticate',
    'API_SignOut',
    'API_AddField',
    'API_CreateTable',
    'API_DeleteField',
    'API_FieldAddChoices',
    'API_FieldRemoveChoices',
    'API_SetFieldProperties',
    'API_SetKeyField',
    'API_AddRecord',
    'API_ChangeRecordOwner',
    'API_CopyMasterDetail',
    'API_DeleteRecord',
    'API_DoQuery',
    'API_DoQueryCount',
    'API_EditRecord',
    'API_GenAddRecordForm',
    'API_GenResultsTable',
    'API_GetNumRecords',
    'API_GetRecordAsHTML',
    'API_GetRecordInfo',
    'API_ImportFromCSV',
    'API_PurgeRecords',
    'API_RunImport',
    'API_AddUserToRole',
    'API_ChangeUserRole',
    'API_ChangeRecordOwner',
    'API_ChangeManager',
    'API_GetRoleInfo',
    'API_GetUserInfo',
    'API_GetUserRole',
    'API_ProvisionUser',
    'API_RemoveUserFromRole',
    'API_SendInvitation',
    'API_UserRoles',
    'API_AddGroupToRole',
    'API_AddSubGroup',
    'API_AddUserToGroup',
    'API_ChangeGroupInfo',
    'API_CopyGroup',
    'API_CreateGroup',
    'API_DeleteGroup',
    'API_GetGroupRole',
    'API_GetUsersInGroup',
    'API_GrantedDBsForGroup',
    'API_GrantedGroups',
    'API_RemoveGroupFromRole',
    'API_RemoveSubgroup',
    'API_RemoveUserFromGroup',
    'API_AddReplaceDBPage',
    'API_GetDBPage',
    'API_GetDBvar',
    'API_SetDBvar',
    'API_Webhooks_Activate',
    'API_Webhooks_Copy',
    'API_Webhooks_Create',
    'API_Webhooks_Deactivate',
    'API_Webhooks_Delete',
    'API_Webhooks_Edit'
]*/