
var util = (function () {

    return {

        /**
        * inheritPrototype() and inherits() are almost the same, except for "super_" in subType,
        * inherits() is RECOMMENDED!
        *
        * inherits util Usage example: 
        *
        * function SuperType(name){
        *   this.name=name;
        * }
        * SuperType.prototype.sayName=function(){console.log(this.name)}
        * 
        * function SubType(name,age){
        *     SuperType.call(this,name); //[***]
        *     this.age=age;
        * }
        * inheritPrototype(SubType,SuperType);
        */
        inheritPrototype: function (subType, superType) {
            var prototype = Object.create(superType.prototype);
            prototype.constructor = subType;
            subType.prototype = prototype;
        },

        inherits: function (ctor, superCtor) {
            ctor.super_ = superCtor;
            ctor.prototype = Object.create(superCtor.prototype, {
                constructor: {
                    value: ctor,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
        }

    };

}());
