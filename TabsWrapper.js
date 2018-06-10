/**
 * TabsWrapper hold Tabs as Object during Tabs instance building process in TabsBuilder:
 * - to externalize input data control from TabsBuilder
 * - to hide some predefined data (tabs/panels CSS classes for main & sub types) in building steps
 * Only final build step will create a real Tabs instance.
 */
/*jshint esversion: 6 */
import Tabs from './Tabs.js';
export default class TabsWrapper {

    /**
     * tabs is an empty Object that will collect
     * input data during building steps of TabsBuilder
     */
    constructor() {

        var tabs = {};
        var type = null;

        const MAIN = Symbol.for('main');
        const SUB = Symbol.for('sub');

        /**
         * Main tabs/panels build step
         * 
         * @returns {TabsWrapper} Builder
         */
        this.main = function() {
            if (typeof this.type === 'function')
                this.type(String(Symbol.keyFor(MAIN)));
            else
                throw new Error('TabsWrapper: this.type not implemented.');
            return this; // As flow of TabsBuilder parent class
        };

        /**
         * Sub tabs/panels build step
         * 
         * @returns {TabsWrapper} Builder
         */
        this.sub = function() {
            if (typeof this.type === 'function')
                this.type(String(Symbol.keyFor(SUB)));
            else
                throw new Error('TabsWrapper: this.type not implemented.');
            return this; // As flow of TabsBuilder parent class
        };


        /**
         * Set type of tabs
         * - typeName: Accept only main or sub type as string value
         * - Copy corresponding CSS class names of Tabs/Panels into data holder
         * 
         * @param {String} typeName type of tabs to set
         * @param {String} property name of property currently being setted
         */
        this.setType = function(typeName, property) {
            checkProperty(typeName, property);
            typeName = typeName.toLocaleLowerCase().trim();
            let tabsSetter = ([{id: String(Symbol.keyFor(MAIN)), setTabs: setMainTabs}, {id: String(Symbol.keyFor(SUB)), setTabs: setSubTabs}].find(setter => setter.id === typeName));
            try {
                tabsSetter.setTabs();
            } catch (error) {
                throw new Error('TabsHolder: Only main or sub type accepted. Wrong type: ' + typeName + ' (' + (error.toString() + ')'));
            }
        };
    
        /**
         * Set containerClassName of tabs
         * - containerClassName: Accept only non empty string value
         * - Copy value into data holder
         * 
         * @param {String} containerClass CSS class name of tabs container to set
         * @param {String} property name of property currently being setted
         */
        this.setContainerClass = function(containerClass, property) {
            checkProperty(containerClass, property);
            containerClass = containerClass.trim().replace(/^\./, '');
            if (['mainContainer', 'subContainer', 'mainTabs', 'mainTab', 'subTabs', 'subTab', 'mainPanels', 'mainPanel', 'subPanels', 'subPanel'].includes(containerClass))
                throw new Error('TabsHolder: ' + containerClass + ' CSS class can not be used in Tabs constructor');
            if (document.querySelector('.'+containerClass) === null)
                throw new Error('TabsHolder: ' + containerClass + ' CSS class Tabs container not found in document');
            tabs.containerClass = containerClass;
        };
    
        /**
         * Final Tabs build step:
         * Build Tabs from collected/controlled data
         * checkProperty twice to prevent too early calls of build method from TabsBuilder in Tabs build process
         * 
         * @param {String} typeName type of tabs to set
         * @param {String} containerClassName CSS class name of tabs container to set
         * @returns {Tabs} builded Tabs
         */
        this.buildTabs = function(typeName, containerClassName) {
            checkProperty(typeName, 'typeName');
            checkProperty(containerClassName, 'containerClassName');
            checkProperty(type, typeName);
            checkProperty(tabs.containerClass, containerClassName);
            return new Tabs(
                tabs.containerClass,
                tabs.tabsClass,
                tabs.tabClass,
                tabs.panelsClass,
                tabs.panelClass
            );
        };

        /**
         * Set CSS class name to properties for main Tabs type
         */
        function setMainTabs() {
            tabs.tabsClass = 'mainTabs';
            tabs.tabClass = 'mainTab';
            tabs.panelsClass = 'mainPanels';
            tabs.panelClass = 'mainPanel';
            type = String(Symbol.keyFor(MAIN));
        }
    
        /**
         * Set CSS class name to properties for sub Tabs type
         */
        function setSubTabs() {
            tabs.tabsClass = 'subTabs';
            tabs.tabClass = 'subTab';
            tabs.panelsClass = 'subPanels';
            tabs.panelClass = 'subPanel';
            type = String(Symbol.keyFor(SUB));
        }

        /**
         * Check property against undefined/non empty string states
         * Throws Error on first failed test
         * 
         * @param {String} property 
         * @param {String} propertyName 
         */
        function checkProperty(property, propertyName) {
            if (typeof property === 'undefined')
                throw new Error('TabsBuilder: ' + propertyName + ' must be defined.');
            if (typeof property !== 'string')
                throw new Error('TabsBuilder: ' + propertyName + ' must be a string.');
            if (property.trim() === '')
                throw new Error('TabsBuilder: ' + propertyName + ' must not be empty.');
        }
    }
}