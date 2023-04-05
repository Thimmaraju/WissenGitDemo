class AddJobTitlePage{

    adminmenu(){

        return "Admin"
    }

    submenuitems(){

        return 'span[class="oxd-topbar-body-nav-tab-item"]'
    }

    jobtitleOption(){

        return "Job Titles"
    }

    addBtn(){

        return '//button[@class="oxd-button oxd-button--medium oxd-button--secondary"]'
    }

    jobtitleinput(){

        return 'input[class="oxd-input oxd-input--active"]'
    }

    jobdescriptioninput(){

        return 'textarea[placeholder="Type description here"]'
    }

    saveBtn(){

        return 'button[type="submit"]'
    }


}

export default AddJobTitlePage;