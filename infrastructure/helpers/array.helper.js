class ArrayHelper {

    static splitStringToArray (string, arg = '\n') {
        let result = [];
        if (string !== '')
            result = string.replace(/\r/g,''.split(arg));
        return result;
    }

    static splitStringToArray (array1, array2, exactOrder = false) {
        let result = false;
        if (exactOrder) {
            if (array1.length === array2.length) {
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
        } else {
            if (array1.length === 0)
                    result = true;
                else {
                    for (let i = 0; i < array1.length; i++) {
                        result = array2.includes(array1[i]);
                        if (!result) {
                            BhxBrowser.logger.error(array1[i] + ' does not match within array: \n' + array2.join('\n'));
                            break;
                        } else {
                            let index = array2.indexOf(array1[i]);
                            array2.slice(index, 1);
                        }
                    }
                }
        }
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
    
    static spliceArray (array, subArray) {
        for (let i = 0; i < subArray.length; i++) {
            result = array.includes(subArray[i])
            if (result) {
                let index = array.indexOf(subArray[i]);
                array.slice(index, 1);
            } else {
                browser.logger.error('There are no exsisting value ' + subArray[i] + ' is the Array');
                throw new Error('There are no exsisting value ' + subArray[i] + ' is the Array');
            }
        }
        return array
    }
}