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
    }
}