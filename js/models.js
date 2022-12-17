function Model_items() {
    this.category = ["item"];
}

{
    function Model_devices() {
        Model_items.call(this);
    }
    //inherit methods from Model_items()
    Model_devices.prototype = new Model_items();

    {
        function Model_phones() { ; }
        Model_phones.prototype = new Model_devices();


        function Model_tablets() { ; }
        Model_tablets.prototype = new Model_devices();


        function Model_computers() { ; }
        Model_computers.prototype = new Model_devices();
    }
}