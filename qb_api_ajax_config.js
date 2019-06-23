//constants
realm = '';
apptoken = '';
usertoken = '';

http_req_types = ['POST', 'GET', 'PUT', 'DELETE', 'PATCH'];

data_formats = ['XML', 'JSON'];

//api call parameters
//Application and table metadata
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

API_FindDBByNameInfo =
    {
        name: 'API_FindDBByName',
        func_cat: 'Application and table metadata',
        refType: 'Main',
        parameters: {
            dbname: {
                val: '',
                req: true
            },
            ParentsOnly: {
                val: '',
                req: false
            },
            ticket: {
                val: '',
                req: true
            },
            udata: {
                val: '',
                req: false
            }
        }
    }
API_GetAncestorInfoInfo =
    {
        name: 'API_GetAncestorInfo',
        func_cat: 'Application and table metadata',
        refType: 'App ID',
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
            }
        }
    }

API_GetAppDTMInfoInfo =
    {
    name: 'API_GetAppDTMInfo',
        func_cat: 'Application and table metadata',
        refType: 'App ID',
        parameters: {
            dbid: {
                val: '',
                req: true
            }
        }
    }

API_GetDBInfoInfo =
    {
    name: 'API_GetDBInfo',
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

API_GrantedDBsInfo =
    {
    name: 'API_GrantedDBs',
        func_cat: 'Application and table metadata',
        refType: 'Main',
        parameters: {
            adminOnly: {
                val: '',
                req: false
            },
            excludeparents: {
                val: '',
                req: false
            },
            includeancestors: {
                val: '',
                req: false
            },
            ticket: {
                val: '',
                req: false
            },
            usertoken: {
                val: usertoken,
                req: true
            },
            udata: {
                val: '',
                req: false
            },
            withembeddedtables: {
                val: usertoken,
                req: false
            },
            realmAppsOnly: {
                val: usertoken,
                req: false
            }
        }
    }

//Creating, copying, and deleting applications
API_CreateDatabaseInfo =
    {
        name: 'API_CreateDatabase',
        func_cat: 'Creating, copying, and deleting applications',
        refType: 'Main',
        parameters: {
            dbname: {
                val: '',
                req: true
            },
            dbdesc: {
                val: '',
                req: true
            },
            ticket: {
                val: '',
                req: true
            },
            createapptoken: {
                val: usertoken,
                req: false
            },
            udata: {
                val: '',
                req: false
            }
        }
    }

API_CloneDatabaseInfo =
    {
        name: 'API_CloneDatabase',
        func_cat: 'Creating, copying, and deleting applications',
        refType: 'Table ID',
        parameters: {
            newdbname: {
                val: '',
                req: true
            },
            newdbdesc: {
                val: '',
                req: false
            },
            keepData: {
                val: '',
                req: false
            },
            excludefiles: {
                val: '',
                req: false
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
            },
            usersandroles: {
                val: '',
                req: false
            }
        }
    }

API_DeleteDatabaseInfo =
    {
        name: 'API_DeleteDatabase',
        func_cat: 'Creating, copying, and deleting applications',
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

API_RenameAppInfo =
    {
        name: 'API_RenameApp',
        func_cat: 'Creating, copying, and deleting applications',
        refType: 'App ID',
        parameters: {
            newappname: {
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

//Uploading and downloading files
API_AddRecordInfo =
    {
        name: 'API_AddRecord',
    func_cat: 'Uploading and downloading files and Record(data) management',
        refType: 'Table ID',
        parameters: {
            field: {
                val: '',
                req: true
            },
            dispcrec: {
                val: '',
                req: false
            },
            fform: {
                val: '',
                req: false
            },
            ignoreerror: {
                val: '',
                req: false
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
            },
            msAsDurationDefault: {
                val: '',
                req: false
            },
            clist: {
                val: '',
                req: false
            }
        }
    }

API_EditRecordInfo =
    {
        name: 'API_EditRecord',
        func_cat: 'Uploading and downloading files and Record(data) management',
        refType: 'Table ID',
        parameters: {
            rid_or_key: {
                val: '',
                req: true
            },
            update_id: {
                val: '',
                req: false
            },
            field: {
                val: '',
                req: true
            },
            disprec: {
                val: '',
                req: false
            },
            fform: {
                val: '',
                req: false
            },
            ignoreError: {
                val: '',
                req: false
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
            },
            msInUTC: {
                val: '',
                req: false
            },
            clist: {
                val: '',
                req: true
            }
        }
    }

// TO DO: the JSON to XML function will result in an error due to info requirement in "field" opening tag
API_UploadFileInfo =
    {
        name: 'API_UploadFile',
        func_cat: 'Uploading and downloading files',
        refType: 'Table ID',
        parameters: {
            field: {
                val: '',
                req: false
            },
            rid: {
                val: '',
                req: false
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
            }
        }
    }

//Secure access to Quick Base
API_AuthenticateInfo =
    {
        name: 'API_Authenticate',
        func_cat: 'Secure access to Quick Base',
        refType: 'Main',
        parameters: {
            username: {
                val: '',
                req: true
            },
            password: {
                val: '',
                req: true
            },
            hours: {
                val: '',
                req: false
            },
            udata: {
                val: '',
                req: false
            }
        }
    }

API_SignOutInfo =
    {
        name: 'API_SignOut',
        func_cat: 'Secure access to Quick Bases',
        refType: 'Main',
        parameters: {
            udata: {
                val: '',
                req: false
            }
        }
    }

//Table and field management
API_AddFieldInfo =
    {
        name: 'API_AddField',
        func_cat: 'Table and field management',
        refType: 'Table ID',
        parameters: {
            add_to_forms: {
                val: '',
                req: false
            },
            apptoken: {
                val: apptoken,
                req: true
            },
            label: {
                val: '',
                req: true
            },
            label: {
                val: '',
                req: false
            },
            ticket: {
                val: '',
                req: false
            },
            usertoken: {
                val: usertoken,
                req: true
            },
            type: {
                val: '',
                req: true
            },
            udata: {
                val: '',
                req: false
            }
        }
    }

API_CreateTableInfo =
    {
        name: 'API_CreateTable',
        func_cat: 'Table and field management',
        refType: 'App ID',
        parameters: {
            tname: {
                val: '',
                req: false
            },
            pnoun: {
                val: '',
                req: false
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

API_DeleteFieldInfo =
    {
        name: 'API_DeleteField',
        func_cat: 'Table and field management',
        refType: 'Table ID',
        parameters: {
            fid: {
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

API_FieldAddChoicesInfo =
    {
        name: 'API_FieldAddChoices',
        func_cat: 'Table and field management',
        refType: 'Table ID',
        parameters: {
            fid: {
                val: '',
                req: true
            },
            choice: {
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

API_FieldRemoveChoicesInfo =
    {
        name: 'API_FieldRemoveChoices',
        func_cat: 'Table and field management',
        refType: 'Table ID',
        parameters: {
            fid: {
                val: '',
                req: true
            },
            choice: {
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


// TO DO: the JSON to XML function will result in an error due to info requirement in "property name"  tag
API_SetFieldPropertiesInfo =
    {
        name: 'API_SetFieldProperties',
        func_cat: 'Table and field management',
        refType: 'Table ID',
        parameters: {
            propertyname: {
                val: '',
                req: true
            },
            fid: {
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

API_SetKeyFieldInfo =
    {
        name: 'API_SetKeyField',
        func_cat: 'Table and field management',
        refType: 'Table ID',
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
            fid: {
                val: '',
                req: true
            },
            udata: {
                val: '',
                req: false
            }
        }
    }

//Record (data) management
API_GetRecordInfoInfo =
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

API_ChangeRecordOwnerInfo =
    {
        name: 'API_ChangeRecordOwner',
    func_cat: 'Record (data) management and Managing user access',
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

API_CopyMasterDetailInfo =
    {
        name: 'API_CopyMasterDetail',
        func_cat: 'Record (data) management',
        refType: 'Table ID',
        parameters: {
            destrid: {
                val: '',
                req: true
            },
            sourcerid: {
                val: '',
                req: true
            },
            copyfid: {
                val: '',
                req: true
            },
            recurse: {
                val: '',
                req: false
            },
            relfids: {
                val: '',
                req: false
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

API_DeleteRecordInfo =
    {
        name: 'API_DeleteRecord',
        func_cat: 'Record (data) management',
        refType: 'Table ID',
        parameters: {
            rid_or_key: {
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

API_DoQueryInfo =
    {
        name: 'API_DoQuery',
        func_cat: 'Record (data) management',
        refType: 'Table ID',
        parameters: {
            query: {
                val: '',
                req: false
            },
            qid: {
                val: '',
                req: false
            },
            qname: {
                val: '',
                req: false
            },
            clist: {
                val: '',
                req: false
            },
            slist: {
                val: '',
                req: false
            },
            fmt: {
                val: '',
                req: false
            },
            returnpercentage: {
                val: '',
                req: false
            },
            options: {
                val: '',
                req: false
            },
            includeRids: {
                val: '',
                req: false
            },
            useFids: {
                val: '',
                req: false
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

API_DoQueryCountInfo =
    {
        name: 'API_DoQueryCount',
        func_cat: 'Record (data) management',
        refType: 'Table ID',
        parameters: {
            query: {
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
            }
        }
    }

// TO DO: the JSON to XML function will result in an error due to info requirement in "field" opening tag
API_GenAddRecordFormInfo =
    {
        name: 'API_GenAddRecordForm',
        func_cat: 'Record (data) management',
        refType: 'Table ID',
        parameters: {
            field: {
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

API_GenResultsTableInfo =
    {
        name: 'API_GenResultsTable',
        func_cat: 'Record (data) management',
        refType: 'Table ID',
        parameters: {
            query: {
                val: '',
                req: false
            },
            qid: {
                val: '',
                req: false
            },
            qname: {
                val: '',
                req: false
            },
            clist: {
                val: '',
                req: false
            },
            slist: {
                val: '',
                req: false
            },
            jht: {
                val: '',
                req: true
            },
            jsa: {
                val: '',
                req: false
            },
            options: {
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

API_GetNumRecordsInfo =
    {
        name: 'API_GetNumRecords',
        func_cat: 'Record (data) management',
        refType: 'Table ID',
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

API_GetRecordAsHTMLInfo =
    {
        name: 'API_GetRecordAsHTML',
        func_cat: 'Record (data) management',
        refType: 'Table ID',
        parameters: {
            rid: {
                val: '',
                req: true
            },
            dfid: {
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

API_ImportFromCSVInfo =
    {
        name: 'API_ImportFromCSV',
        func_cat: 'Record (data) management',
        refType: 'Table ID',
        parameters: {
            records_csv: {
                val: '',
                req: true
            },
            clist: {
                val: '',
                req: true
            },
            clist_output: {
                val: '',
                req: false
            },
            decimalPercent: {
                val: '',
                req: false
            },
            skipfirst: {
                val: '',
                req: false
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
            },
            msInUTC: {
                val: '',
                req: false
            },
            mergeFieldId: {
                val: '',
                req: false
            }
        }
    }

API_PurgeRecordsInfo =
    {
        name: 'API_PurgeRecords',
        func_cat: 'Record (data) management',
        refType: 'Table ID',
        parameters: {
            query: {
                val: '',
                req: false
            },
            qid: {
                val: '',
                req: false
            },
            qname: {
                    val: '',
                    req: false
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

API_RunImportInfo =
    {
        name: 'API_RunImport',
        func_cat: 'Record (data) management',
        refType: 'Table ID',
        parameters: {
            id: {
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

//Managing user access
API_AddUserToRoleInfo =
    {
        name: 'API_AddUserToRole',
        func_cat: 'Managing user access',
        refType: 'App ID',
        parameters: {
            userid: {
                val: '',
                req: true
            },
            roleid: {
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

API_ChangeUserRoleInfo =
    {
        name: 'API_ChangeUserRole',
        func_cat: 'Managing user access',
        refType: 'App ID',
        parameters: {
            userid: {
                val: '',
                req: true
            },
            roleid: {
                val: '',
                req: true
            },
            newroleid: {
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

API_ChangeManagerInfo =
    {
        name: 'API_ChangeManager',
        func_cat: 'Managing user access',
        refType: 'App ID',
        parameters: {
            newmgr: {
                val: '',
                req: true
            },
            ticket: {
                val: '',
                req: false
            },
            udata: {
                val: '',
                req: false
            }
        }
    }

API_GetRoleInfoInfo =
    {
        name: 'API_GetRoleInfo',
        func_cat: 'Managing user access',
        refType: 'App ID',
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

API_GetUserInfoInfo =
    {
        name: 'API_GetUserInfo',
        func_cat: 'Managing user access',
        refType: 'Main',
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
            email: {
                val: '',
                req: false
            },
            udata: {
                val: '',
                req: false
            }
        }
    }

API_GetUserRoleInfo =
    {
        name: 'API_GetUserRole',
        func_cat: 'Managing user access',
        refType: 'App ID',
        parameters: {
            userid: {
                val: '',
                req: false
            },
            ticket: {
                val: '',
                req: false
            },
            usertoken: {
                val: usertoken,
                req: true
            },
            inclgrps: {
                val: '',
                req: false
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

API_ProvisionUserInfo =
    {
        name: 'API_ProvisionUser',
        func_cat: 'Managing user access',
        refType: 'App ID',
        parameters: {
            email: {
                val: '',
                req: true
            },
            roleid: {
                val: '',
                req: false
            },
            fname: {
                val: '',
                req: true
            },
            lname: {
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

API_RemoveUserFromRoleInfo =
    {
        name: 'API_RemoveUserFromRole',
        func_cat: 'Managing user access',
        refType: 'App ID',
        parameters: {
            userid: {
                val: '',
                req: true
            },
            rolerid: {
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

API_SendInvitationInfo =
    {
        name: 'API_SendInvitation',
        func_cat: 'Managing user access',
        refType: 'App ID',
        parameters: {
            userid: {
                val: '',
                req: true
            },
            usertext: {
                val: '',
                req: false
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

API_UserRolesInfo =
    {
        name: 'API_UserRoles',
        func_cat: 'Managing user access',
        refType: 'App ID',
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

//Managing groups
API_AddGroupToRoleInfo =
    {
        name: 'API_AddGroupToRole',
        func_cat: 'Managing groups',
        refType: 'App ID',
        parameters: {
            gid: {
                val: '',
                req: true
            },
            roleid: {
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

API_AddSubGroupInfo =
    {
        name: 'API_AddSubGroup',
        func_cat: 'Managing groups',
        refType: 'Main',
        parameters: {
            gid: {
                val: '',
                req: true
            },
            subgroupid: {
                val: '',
                req: true
            },
            ticket: {
                val: '',
                req: true
            },
            udata: {
                val: '',
                req: false
            }
        }
    }

API_AddUserToGroupInfo =
    {
        name: 'API_AddUserToGroup',
        func_cat: 'Managing groups',
        refType: 'Main',
        parameters: {
            gid: {
                val: '',
                req: true
            },
            uid: {
                val: '',
                req: true
            },
            email: {
                val: '',
                req: false
            },
            screenName: {
                val: '',
                req: false
            },
            allowAdminAccess: {
                val: '',
                req: false
            },
            ticket: {
                val: '',
                req: true
            },
            udata: {
                val: '',
                req: false
            }
        }
    }

API_ChangeGroupInfoInfo =
    {
        name: 'API_ChangeGroupInfo',
        func_cat: 'Managing groups',
        refType: 'Main',
        parameters: {
            gid: {
                val: '',
                req: true
            },
            name: {
                val: '',
                req: false
            },
            description: {
                val: '',
                req: false
            },
            accountId: {
                val: '',
                req: false
            },
            ticket: {
                val: '',
                req: true
            },
            udata: {
                val: '',
                req: false
            }
        }
    }

API_CopyGroupInfo =
    {
        name: 'API_CopyGroup',
        func_cat: 'Managing groups',
        refType: 'Main',
        parameters: {
            gid: {
                val: '',
                req: true
            },
            ticket: {
                val: '',
                req: true
            },
            udata: {
                val: '',
                req: false
            },
            name: {
                val: '',
                req: true
            },
            description: {
                val: '',
                req: false
            },
            gacct: {
                val: '',
                req: false
            }
        }
    }

API_CreateGroupInfo =
    {
        name: 'API_CreateGroup',
        func_cat: 'Managing groups',
        refType: 'Main',
        parameters: {
            name: {
                val: '',
                req: true
            },
            description: {
                val: '',
                req: true
            },
            accountId: {
                val: '',
                req: false
            },
            ticket: {
                val: '',
                req: true
            },
            udata: {
                val: '',
                req: false
            }
        }
    }

API_DeleteGroupInfo =
    {
        name: 'API_DeleteGroup',
        func_cat: 'Managing groups',
        refType: 'Main',
        parameters: {
            gid: {
                val: '',
                req: true
            },
            ticket: {
                val: '',
                req: true
            },
            udata: {
                val: '',
                req: false
            }
        }
    }

API_GetGroupRoleInfo =
    {
        name: 'API_GetGroupRole',
        func_cat: 'Managing groups',
        refType: 'App ID',
        parameters: {
            gid: {
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

API_GetUsersInGroupInfo =
    {
        name: 'API_GetUsersInGroup',
        func_cat: 'Managing groups',
        refType: 'Main',
        parameters: {
            gid: {
                val: '',
                req: true
            },
            ticket: {
                val: '',
                req: true
            },
            includeAllMgrs: {
                val: '',
                req: false
            },
            udata: {
                val: '',
                req: false
            }
        }
    }

API_GrantedDBsForGroupInfo =
    {
        name: 'API_GrantedDBsForGroup',
        func_cat: 'Managing groups',
        refType: 'Main',
        parameters: {
            gid: {
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
            udata: {
                val: '',
                req: false
            }
        }
    }

API_GrantedGroupsInfo =
    {
        name: 'API_GrantedGroups',
        func_cat: 'Managing groups',
        refType: 'Main',
        parameters: {
            userid: {
                val: '',
                req: true
            },
            adminonly: {
                val: '',
                req: false
            },
            ticket: {
                val: '',
                req: true
            },
            usertoken: {
                val: usertoken,
                req: true
            }
        }
    }

API_RemoveGroupFromRoleInfo =
    {
        name: 'API_RemoveGroupFromRole',
        func_cat: 'Managing groups',
        refType: 'App ID',
        parameters: {
            gid: {
                val: '',
                req: true
            },
            roleid: {
                val: '',
                req: true
            },
            allRoles: {
                val: '',
                req: false
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

API_RemoveSubgroupInfo =
    {
        name: 'API_RemoveSubgroup',
        func_cat: 'Managing groups',
        refType: 'Main',
        parameters: {
            gid: {
                val: '',
                req: true
            },
            subgroupid: {
                val: '',
                req: true
            },
            ticket: {
                val: '',
                req: true
            },
            udata: {
                val: '',
                req: false
            }
        }
    }
API_RemoveUserFromGroupInfo =
    {
        name: 'API_RemoveUserFromGroup',
        func_cat: 'Managing groups',
        refType: 'Main',
        parameters: {
            gid: {
                val: '',
                req: true
            },
            uid: {
                val: '',
                req: true
            },
            email: {
                val: '',
                req: false
            },
            screenName: {
                val: '',
                req: false
            },
            ticket: {
                val: '',
                req: true
            },
            udata: {
                val: '',
                req: false
            }
        }
    }

//Miscellaneous functions
API_AddReplaceDBPageInfo =
    {
        name: 'API_AddReplaceDBPage',
        func_cat: 'Miscellaneous functions',
        refType: 'App ID',
        parameters: {
            pagename: {
                val: '',
                req: false
            },
            pageid: {
                val: '',
                req: false
            },
            pagetype: {
                val: '',
                req: true
            },
            pagebody: {
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

API_GetDBPageInfo =
    {
        name: 'API_GetDBPage',
        func_cat: 'Miscellaneous functions',
        refType: 'App ID',
        parameters: {
            pageID: {
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

API_GetDBvarInfo =
    {
        name: 'API_GetDBvar',
        func_cat: 'Miscellaneous functions',
        refType: 'App ID',
        parameters: {
            varname: {
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

API_SetDBvarInfo =
    {
        name: 'API_SetDBvar',
        func_cat: 'Miscellaneous functions',
        refType: 'App ID',
        parameters: {
            varname: {
                val: '',
                req: true
            },
            value: {
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
 
//Webhooks
API_Webhooks_ActivateInfo =
    {
        name: 'API_Webhooks_Activate',
        func_cat: 'Webhooks',
        refType: 'Table ID',
        parameters: {
            actionIDList: {
                val: '',
                req: true
            }
        }
    }

API_Webhooks_CopyInfo =
    {
        name: 'API_Webhooks_Copy',
        func_cat: 'Webhooks',
        refType: 'Table ID',
        parameters: {
            actionIDList: {
                val: '',
                req: true
            }
        }
    }

// TO DO: factor in multiple header and value condtions
API_Webhooks_CreateInfo =
    {
        name: 'API_Webhooks_Create',
        func_cat: 'Webhooks',
        refType: 'Table ID',
        parameters: {
            Label: {
                val: '',
                req: true
            },
            Description: {
                val: '',
                req: false
            },
            Query: {
                val: '',
                req: false
            },
            WorkflowWhen: {
                val: '',
                req: false
            },
            WebhookURL: {
                val: '',
                req: true
            },
            WebhookHeader: {
                val: '',
                req: false
            },
            WebhookHeaderCount: {
                val: '',
                req: false
            },
            WebhookHeaderKey1: {
                val: '',
                req: false
            },
            WebhookHeaderValue1: {
                val: '',
                req: false
            },
            WebhookMessage: {
                val: '',
                req: false
            },
            WebhookMessageFormat: {
                val: '',
                req: false
            },
            WebhookHTTPVerb: {
                val: '',
                req: false
            },
            tfidsWhich: {
                val: '',
                req: false
            }
        }
    }

API_Webhooks_DeactivateInfo =
    {
        name: 'API_Webhooks_Deactivate',
        func_cat: 'Webhooks',
        refType: 'Table ID',
        parameters: {
            actionIDList: {
                val: '',
                req: true
            }
        }
    }

// TO DO: factor in multiple header and value condtions
API_Webhooks_DeleteInfo =
    {
        name: 'API_Webhooks_Delete',
        func_cat: 'Webhooks',
        refType: 'Table ID',
        parameters: {
            actionIDList: {
                val: '',
                req: true
            }
        }
    }

API_Webhooks_EditInfo =
    {
        name: 'API_Webhooks_Edit',
        func_cat: 'Webhooks',
        refType: 'Table ID',
        parameters: {
            actionID: {
                val: '',
                req: true
            },
            Label: {
                val: '',
                req: true
            },
            Description: {
                val: '',
                req: false
            },
            Query: {
                val: '',
                req: false
            },
            WorkflowWhen: {
                val: '',
                req: false
            },
            WebhookURL: {
                val: '',
                req: true
            },
            WebhookHeader: {
                val: '',
                req: false
            },
            WebhookHeaderCount: {
                val: '',
                req: false
            },
            WebhookHeaderKey1: {
                val: '',
                req: false
            },
            WebhookHeaderValue1: {
                val: '',
                req: false
            },
            WebhookMessage: {
                val: '',
                req: false
            },
            WebhookMessageFormat: {
                val: '',
                req: false
            },
            WebhookHTTPVerb: {
                val: '',
                req: false
            },
            tfidsWhich: {
                val: '',
                req: false
            }
        }
    }

//api choices list

api_choices = [
    API_FindDBByNameInfo,
    API_GetAncestorInfoInfo,
    API_GetAppDTMInfoInfo,
    API_GetDBInfoInfo,
    API_GetSchemaInfo,
    API_GrantedDBsInfo,
    API_CloneDatabaseInfo,
    API_CreateDatabaseInfo,
    API_DeleteDatabaseInfo,
    API_RenameAppInfo,
    API_AddRecordInfo,
    API_EditRecordInfo,
    API_UploadFileInfo,
    API_AuthenticateInfo,
    API_SignOutInfo,
    API_AddFieldInfo,
    API_CreateTableInfo,
    API_DeleteFieldInfo,
    API_FieldAddChoicesInfo,
    API_FieldRemoveChoicesInfo,
    API_SetFieldPropertiesInfo,
    API_SetKeyFieldInfo,
    API_ChangeRecordOwnerInfo,
    API_CopyMasterDetailInfo,
    API_DeleteRecordInfo,
    API_DoQueryInfo,
    API_DoQueryCountInfo,
    API_GenAddRecordFormInfo,
    API_GenResultsTableInfo,
    API_GetNumRecordsInfo,
    API_GetRecordAsHTMLInfo,
    API_GetRecordInfoInfo,
    API_ImportFromCSVInfo,
    API_PurgeRecordsInfo,
    API_RunImportInfo,
    API_AddUserToRoleInfo,
    API_ChangeUserRoleInfo,
    API_ChangeManagerInfo,
    API_GetRoleInfoInfo,
    API_GetUserInfoInfo,
    API_GetUserRoleInfo,
    API_ProvisionUserInfo,
    API_RemoveUserFromRoleInfo,
    API_SendInvitationInfo,
    API_UserRolesInfo,
    API_AddGroupToRoleInfo,
    API_AddSubGroupInfo,
    API_AddUserToGroupInfo,
    API_ChangeGroupInfoInfo,
    API_CopyGroupInfo,
    API_CreateGroupInfo,
    API_DeleteGroupInfo,
    API_GetGroupRoleInfo,
    API_GetUsersInGroupInfo,
    API_GrantedDBsForGroupInfo,
    API_GrantedGroupsInfo,
    API_RemoveGroupFromRoleInfo,
    API_RemoveSubgroupInfo,
    API_RemoveUserFromGroupInfo,
    API_AddReplaceDBPageInfo,
    API_GetDBPageInfo,
    API_GetDBvarInfo,
    API_SetDBvarInfo,
    API_Webhooks_ActivateInfo,
    API_Webhooks_CopyInfo,
    API_Webhooks_CreateInfo,
    API_Webhooks_DeactivateInfo,
    API_Webhooks_DeleteInfo,
    API_Webhooks_EditInfo
]