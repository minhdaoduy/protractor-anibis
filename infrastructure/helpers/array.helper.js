let dateFormat = require('dateformat');
class ArrayHelper {

    static splitStringToArray (string, arg = '\n') {
        let result = [];
        if (string !== '')
            result = string.replace(/\r/g,''.split(arg));
        return result;
    }

    /**
     * 
     * @param {*} array1: parent array which you want to verify [child array] contain in it
     * @param {*} array2: child array
     */
    static isArrayContain (array1, array2) {
        let result = false;
   
        if (array1.length === array2.length === 0) {
            if (array1.length === 0)
                result = true;
            else {
                for (let i = 0; i < array1.length; i++) {
                    result = array1[i] === array2[i];
                    if (!result) {
                        BhxBrowser.logger.error('The actual result does not match the expectation at ID = ' + (i + 1) + " : " + array1[i] + ' and ' + array2[i]);
                        break;
                    }
                }
            }
        }
       
        return result;
    }

    /**
     * 
     * @param {*} array1: parent array which you want to verify [child array] NOT contain in it
     * @param {*} array2: child array
     */
    static isArrayNotContain (array1, array2) {
        let result = false;
        for (let i = 0; i < array1.length; i++) {
            result = array1.includes(array2[i])
            if (result) {
                break;
            }
        }

        return !result;
    }

    static sortArrayDateDecreasing (array) {
        return array.sort(function (a, b) {
            var aa = new Date(a.split('.').reverse().join()),
                bb = new Date(b.split('.').reverse().join());
            return aa > bb ? -1 : (aa < bb ? 1 : 0);
        })
    }

    static sortArrayDateAscending (array) {
        return array.sort(function(a, b) {
            var aa = a.split('.').reverse().join(),
                bb = b.split('.').reverse().join();
            return aa > bb ? -1 : (aa < bb ? 1 : 0);
        })
    }

    static getTypeOfSortFromArrayDate (array) {
        if (JSON.stringify(this.sortArrayDateDecreasing([...array])) === JSON.stringify(array))
            return "Decreasing";
        else if (JSON.stringify(this.sortArrayDateAscending([...array])) === JSON.stringify(array))
            return "Ascending"
        else
            return "Non-sorting"
    }

}
module.exports = ArrayHelper;