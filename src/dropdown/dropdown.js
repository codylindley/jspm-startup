//JS
import kendo from 'kendo-ui/src/js/kendo.dropdownlist.js';
//template
import dropdownTemplate from './dropdownTemplate.html!text';
//data
import dropdownData from './dropdownData.json!';
//css
import 'kendo-ui/styles/kendo.common-bootstrap.min.css!';
import 'kendo-ui/styles/kendo.bootstrap.min.css!';

const view = $('<div class="panel panel-default" style="margin:50px"> <div class="panel-heading">Select:</div> <div class="panel-body"><select></select></div></div>').appendTo('body');

const dropdown = new kendo.ui.DropDownList(view.find('select'),{
    template: kendo.template(dropdownTemplate),
    dataTextField: 'ContactName',
    dataValueField: 'CustomerID',
    dataSource: dropdownData
});

export {dropdown};
