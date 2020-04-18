import {api} from '../../api'

export const UserService = {
    Get_OpenId:(data)=>{
      return api('/admin/Get_OpenId','get',data)
    },
    getUser:(data)=>{
        return api('/admin/Get_UserInfo','get',data)
    },
    Save_User:(data)=>{
        return api('/login/Save_User','post',data)
    },
    get_credit:(data)=>{
        return api('/admin/get_credit','get',data)
    },
    get_consume:(data)=>{
        return api('/admin/get_consume','get',data)
    }
}