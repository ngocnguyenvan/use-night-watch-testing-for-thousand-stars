export default {
    '@tags': ['savedSearch'],
    'Adding Saved search has All Area': (client) => {
        const loginPage = client.page.loginPage();
        const leadDetail = client.page.leadDetail();
        const successPage = client.page.successPage();
        const constantsLogin = client.globals.constantsLogin;
        const delayTime = client.globals.delayTime;
        const waitForAPICallback = client.globals.waitForAPICallback;
        leadDetail
            .navigate()
            .login( constantsLogin.emailPass, constantsLogin.passwordPass)
        client.pause(waitForAPICallback);

        leadDetail.addSaveSearch();
        client.pause(delayTime);

        leadDetail.changeInputLabelAndLocation("Test label 2")
        client.pause(delayTime);

        leadDetail.changeTabs('@tabAllAreas');
        client.pause(waitForAPICallback);
        leadDetail.clickCheckbox('@countyCheckbox');

        leadDetail.inputPrice('200', '400');

        leadDetail.chooseSelectElement('@bedroomsSelect');
        leadDetail.chooseOptionElement('@optionBedrooms');

        leadDetail.chooseSelectElement('@BathsSelect');
        leadDetail.chooseOptionElement('@optionBaths');

        leadDetail.inputSqft('0', '2000');

        leadDetail.chooseSelectElement('@yearMinSelect');
        leadDetail.chooseOptionElement('@optionYearMin');

        leadDetail.chooseSelectElement('@yearMaxSelect');
        leadDetail.chooseOptionElement('@optionYearMax');

        leadDetail.clickCheckbox('@houseCheckboxSaveSearch');

        leadDetail.clickButton('@hasPhotoButton');

        leadDetail.chooseSelectElement('@daysOnMarketSelect');
        leadDetail.chooseOptionElement('@optionDaysOnMarket');

        leadDetail.chooseSelectElement('@lotSizeMinSelect');
        leadDetail.chooseOptionElement('@optionLotSizeMin');

        leadDetail.chooseSelectElement('@lotSizeMaxSelect');
        leadDetail.chooseOptionElement('@optionLotSizeMax');

        leadDetail.clickCheckbox('@newOrUpdatedCheckbox');

        leadDetail.chooseSelectElement('@frequencySelect');
        leadDetail.chooseOptionElement('@optionFrequency');

        leadDetail.submitAndSave();
        client.pause(waitForAPICallback);

        leadDetail.expect.element('@reusutlSaveSearchFeatured').text.to.equal('Test label 2: CA, 5+ Beds, 6+ Baths, 0+ Sqft $200k-$400k');
        client.end();
    }
};