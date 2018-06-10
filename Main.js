/**
 * Main Test class
 */
/*jshint esversion: 6 */
import TabsBuilder from './TabsBuilder.js';
export const main = new class Main {

    constructor() {

        /**
         * Build only one test instance
         * That will create example Tabs on DOMContentLoaded event
         */
        if (!Main.instance) {
            Main.instance = this;
            document.addEventListener('DOMContentLoaded', onDOMContentLoaded);
            Object.freeze(this);
        }
        return Main.instance;

        /**
         * Build all Tabs on DOMContentLoaded event
         * 
         * @param {Event} event 
         */
        function onDOMContentLoaded(event) {
            event.stopPropagation();
            event.preventDefault();
            createTabs();
        }

        /**
         * Create example Tabs
         */
        function createTabs() {
            new TabsBuilder().main().containerClass('mainContainer1').build();
            new TabsBuilder().sub().containerClass('subContainer1').build();
            new TabsBuilder().sub().containerClass('subContainer2').build();
            new TabsBuilder().sub().containerClass('subContainer3').build();
            new TabsBuilder().sub().containerClass('subContainer4').build();
        }
    }
}();