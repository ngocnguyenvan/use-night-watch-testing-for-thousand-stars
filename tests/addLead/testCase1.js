export default {
    '@tags': ['addLead'],
    'Display "add lead detail" screen': (client) => {
        const loginPage = client.page.loginPage();
        const addLeadDetail = client.page.leadDetailAdd();
        const successPage = client.page.successPage();
        const constantsLogin = client.globals.constantsLogin;
        const waitForAPICallback = client.globals.waitForAPICallback;
        addLeadDetail
            .navigate()
            .login( constantsLogin.emailPass, constantsLogin.passwordPass)
        client.pause(waitForAPICallback);
        addLeadDetail.clickAddLeadButton();
        successPage.expect.element('@leadAddPage').to.be.visible;
        client.end();
    }
};