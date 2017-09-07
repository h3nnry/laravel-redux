import lodash from 'lodash'
import config from './config'


/**
 * Array query
 * @param   {array}      array
 * @param   {String}    id
 * @param   {String}    keyAlias
 * @return  {Array}
 */
const queryArray = (array, key, keyAlias = 'key') => {
    if (!(array instanceof Array)) {
        return null
    }
    const item = array.filter(_ => _[keyAlias] === key)
    if (item.length) {
        return item[0]
    }
    return null
}

/**
 * Array format to tree structure
 * @param   {array}     array
 * @param   {String}    id
 * @param   {String}    pid
 * @param   {String}    children
 * @return  {Array}
 */
const arrayToTree = (array, id = 'id', pid = 'pid', children = 'children') => {
    let data = lodash.cloneDeep(array)
    let result = []
    let hash = {}
    data.forEach((item, index) => {
        hash[data[index][id]] = data[index]
    })

    data.forEach((item) => {
        let hashVP = hash[item[pid]]
        if (hashVP) {
            !hashVP[children] && (hashVP[children] = [])
            hashVP[children].push(item)
        } else {
            result.push(item)
        }
    })
    return result
}

export {
    config,
    queryArray,
    arrayToTree,
}