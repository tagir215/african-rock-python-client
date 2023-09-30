
export default class ComponentMapper{

    static productToCartItem(product) {
   // ["Motherboard","Case","Gpu","Cpu","CpuCooler","Ram","Storage","PowerUnit" ];
        const components = product.components;
        const cartItem = {
            motherboardId: components[0].id,
            caseId: components[1].id,
            gpuId: components[2].id,
            cpuId:components[3].id, 
            cpuCoolerId: components[4].id,
            ramId: components[5].id,
            storageId: components[6].id,
            powerUnitId: components[7].id,
            os: "os",
            osVersion: "version 8"
        };

        return cartItem;
    }

    static getCookie(name) {
    const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.startsWith(name + '=')) {
                return cookie.substring(name.length + 1);
            }
        }
        return null;
    }

}