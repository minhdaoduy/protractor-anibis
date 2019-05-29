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
}