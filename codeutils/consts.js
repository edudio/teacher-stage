/**
 * Created by solomon on 15/10/22.
 */

module.exports = {
    aodianyun:{
        user:'3289',
        lss: {
            apiHost: 'http://openapi.aodianyun.com/v2/LSS.',
            buildUrl: function (methodName) {
                return this.apiHost + methodName;
            },

            // http api url
            getApp: this.buildUrl('GetApp'),
            setAppDNS: this.buildUrl('SetAppDns'),

            // domain for specific user of aodianyun
            publish_domain: 'rtmp://' + this.aodianyun.user + '.lsspublish.aodianyun.com/',
            play_domain: 'rtmp://' + this.environment.aodianyun.user + '.lssplay.aodianyun.com/'
        },
        dms:{
            pub_key:'pub_4cae9d25f8393f274a30d608d94568d6',
            sub_key:'sub_3805063028e1d979b34b008a3c3e0ce5',
            s_key:'s_731fb07bdfe841fb2a4e13e1d4800b9d'
        }
    }
};


