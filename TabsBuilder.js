/**
 * A Tabs class builder extending TabsWrapper:
 * - to hide input data control in building steps
 * - to hide some predefined data (tabs/panels CSS classes for main & sub types) in building steps
 */
/*jshint esversion: 6 */
import TabsWrapper from './TabsWrapper.js';
export default class TabsBuilder extends TabsWrapper {

    /**
     * Build holder, return builder
     * 
     * @returns {TabsBuilder} Builder
     */
    constructor() {
        super();
        return this;
    }

    /**
     * Tab Type build step : 
     * - Set tabs type
     * 
     * @param {String} tabsTypeName 
     * @returns {TabsBuilder} Builder
     */
    type(tabsTypeName) {
        this.setType(tabsTypeName, this.type.name);
        return this;
    }

    /**
     * Tab containerClass build step :
     * - Set tabs containerClass
     * 
     * @param {String} containerClassName
     * @returns {TabsBuilder} Builder
     */
    containerClass(containerClassName) {
        this.setContainerClass(containerClassName, this.containerClass.name);
        return this;
    }

    /**
     * Final build step
     * 
     * @returns {Tabs} Builded Tabs from TabsHolder
     */
    build() {
        return this.buildTabs(this.type.name, this.containerClass.name);
    }
}