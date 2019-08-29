/**
 * Cybotranik WUI
 *
 * Website html User Interface.
 *
 * @author Azmi SAHIN
 * @since 2019
 * */
class CybotranikWUI {

    /**
     * Cybotranik WUI
     *
     * Website html User Interface.
     *
     * @returns <CybotranikWUI>
     */
    constructor() {

        /**
         * Active Package Name
         */
        this.Name = require('../package.json').name;

        /**
         * Active Package Version
         */
        this.Version = require('../package.json').version;

        /**
         * @returns <CybotranikWUI>
         */
        return this
    }
}

module.exports = CybotranikWUI