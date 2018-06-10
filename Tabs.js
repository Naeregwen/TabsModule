/**
 * ES6 module
 * Two levels embedded Tabs system,
 * based on https://codepen.io/FelipeMartinin/pen/uFnhf
 */
/*jshint esversion: 6 */
export default class Tabs {

    /**
     * For all children of .containerClass:
     * - Collect all tabs (.tabsClass .tabClass) and panels (.panelsClass .panelClass) in instance
     * - Bind all tabs click events to instance
     * - Show panels corresponding to active tabs
     * 
     * Parameters: only the name of the class (myContainer), not CSS syntax (.myContainer)
     * 
     * @param {String} containerClass tabs container class name
     * @param {String} tabsClass tabs class name
     * @param {String} tabClass tab class name
     * @param {String} panelsClass panels class name
     * @param {String} panelClass panel class name
     */
    constructor(containerClass, tabsClass, tabClass, panelsClass, panelClass) {

        containerClass = containerClass.replace(/^\./, '');
        tabsClass = tabsClass.replace(/^\./, '');
        tabClass = tabClass.replace(/^\./, '');
        panelsClass = panelsClass.replace(/^\./, '');
        panelClass = panelClass.replace(/^\./, '');

        var tabs = Array.from(document.querySelectorAll('.' + containerClass + ' .' + tabsClass + ' .' + tabClass));
        var panels = Array.from(document.querySelectorAll('.' + containerClass + ' .' + panelsClass + ' .' + panelClass));

        tabs.forEach(tab => tab.addEventListener('click', clickListener));
        tabs.forEach(tab => {
            if (tab.classList.contains('active')) {
                showPanel(tabs.indexOf(tab));
            }
        });

        /**
         * Display Tab identified by id
         * 
         * @param {String} id 
         */
        this.show = function(id) {
            let index = 0;
            for (let tab of tabs) {
                if (tab.id === id) {
                    show(index);
                    break;
                } else {
                    index++;
                }
            }
        };

        /**
         * Stop click bubbling/default
         * Call show to display clicked Tab
         * 
         * @param {Event} event click event
         */
        function clickListener(event) {
            event.stopPropagation();
            event.preventDefault();
            show(tabs.indexOf(event.target));
        }
        
        /**
         * Clear all Tabs, activate indexed one
         * Hide all Panels, show indexed one
         * 
         * @param {Number} index index of the Tab/Panel to activate/show
         */
        function show(index) {
            tabs.forEach(tab => {tab.classList.remove('active');});
            tabs[index].classList.add('active');
            panels.forEach(panel => {panel.style.display = 'none';});
            showPanel(index);
        }

        /**
         * Show indexed panel
         * 
         * @param {Number} index 
         */
        function showPanel(index) {
            panels[index].style.display = 'block';
        }
    }
}