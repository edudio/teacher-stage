/**
 * Created by solomon on 15/10/22.
 */

module.exports = {
    lss: {
        apiHost: 'http://openapi.aodianyun.com/v2/LSS.',
        buildUrl: function (methodName) {
            return this.apiHost + methodName;
        },

        // http api url
        getApp: this.buildUrl('GetApp'),
        setAppDNS: this.buildUrl('SetAppDns'),

        // domain for specific user of aodianyun
        publish_domain: 'rtmp://' + global.environment.aodianyun.user + '.lsspublish.aodianyun.com/',
        play_domain: 'rtmp://' + global.environment.aodianyun.user + '.lssplay.aodianyun.com/'
    }
};


