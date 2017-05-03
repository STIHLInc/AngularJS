System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Product, AppComponent, ProductS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Product = class Product {
            };
            exports_1("Product", Product);
            AppComponent = class AppComponent {
                constructor() {
                    this.Products = ProductS;
                }
                showProduct(item) {
                    this.currentProduct = item;
                }
            };
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'app',
                    templateUrl: './partials/app.html',
                    styleUrls: ["./css/app.css"]
                }), 
                __metadata('design:paramtypes', [])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
            ProductS = [
                {
                    "name": "MSA 120 Battery Chainsaw",
                    "shortname": "MSA120",
                    "reknown": "Part of the AK Series",
                    "bio": "The MSA 120 C-BQ is a great battery-powered chainsaw for suburban homeowners, handling storm cleanup to limb removal. The MSA 120 C-BQ bundle comes standard with the AK 20 battery and AL 101 battery charger. It features low vibration, quick chain adjustment and STIHL Quickstop® Plus chain braking feature. Make 100 cuts through a 4″ log on a single charge, which gives you enough power to tackle a stack of firewood."
                }, {
                    "name": "MSA 200 C-BQ",
                    "shortname": "MSA200",
                    "reknown": "Delivers the cutting power of gasoline while being lightweight",
                    "bio": "Part of the STIHL AP Series of battery equipment, this chainsaw will feel at home in the suburbs, or on rural properties like farms and ranches. It also features our Quick Chain Adjuster, allowing you to adjust the chain tension without tools. Whatever the cutting need, the MSA 200 C-BQ will make the cut."
                }, {
                    "name": "BGA 45",
                    "shortname": "BGA45",
                    "reknown": "Part of the STIHL AI Series",
                    "bio": "BGA 45 handheld blower is the no-fuss, battery-powered blower for urban homeowners. It is exceptionally quiet and features an integrated battery built right inside. On a single charge, the BGA 45 can clear more than 13 parking spaces (2,153 square ft.) with a blowing speed of 85 mph and an air volume of 235 cfm."
                }, {
                    "name": "BGA 85",
                    "shortname": "BGA85",
                    "reknown": "The battery-powered handheld blower that combines high performance with low weight",
                    "bio": "No gas. No cord. No exhaust emissions – and almost no weight. The STIHL BGA 85 handheld blower features a powerful 36-volt, Lithium-Ion battery for excellent blowing power that is quiet, clean, and best of all, cordless."
                },
                {
                    "name": "BGA 100",
                    "shortname": "BGA100",
                    "reknown": "The BGA 100 is designed for the professional landscaper ",
                    "bio": "Using a backpack battery system for “all day” use. Compatible with STIHL backpack batteries (or battery belt adaptors), this lightweight blower is a great combination of power and run time. In fact, when in boost mode, the BGA 100 is the most powerful dedicated handheld blower in the STIHL range. This Lithium-Ion battery-powered blower even delivers performance superior to many gas-powered models."
                }, {
                    "name": "FSA 45",
                    "shortname": "FSA45",
                    "reknown": "The FSA 45 features an integrated battery and is a great choice for occasional use in small" +
                        " environments",
                    "bio": "This STIHL AI Series trimmer is lightweight at only 5.1 lbs. (including battery), and includes PolyCut™ cutting blades with onboard storage. It also features an adjustable trimmer head and shaft, which can also rotate 90 degrees for easy edging. Plus, when fully charged, it has enough power to trim the length of over three football fields."
                }, {
                    "name": "FSA 56",
                    "shortname": "FSA56",
                    "reknown": "The FSA 56 battery-powered trimmer is a great choice for suburban homeowners",
                    "bio": "The FSA 56 bundle comes standard with the AK 10 battery and AL 101 battery charger. It is lightweight at only 7.3 lbs. (including battery) and features an adjustable shaft, AutoCut® head and a trimmer line cartridge system for easy reloading. On a single charge, it has enough power to trim 0.31 miles – the same length as five football fields."
                },
                {
                    "name": "FSA 85",
                    "shortname": "FSA85",
                    "reknown": "So powerful and light, it feels like cheating. ",
                    "bio": "The STIHL FSA 85 professional trimmer uses the AP Series of batteries to deliver the ultimate balance of performance and run time. The trimmer is also lightweight and runs at a low vibration for easy, smooth cutting. Its variable speed trigger allows you to control cutting speed on the fly, so you can maneuver easily around delicate plantings."
                },
                {
                    "name": "HSA 45",
                    "shortname": "HSA45",
                    "reknown": "Part of the AI Series, the HSA 45 hedge trimmer is a great option for residential, urban homeowners",
                    "bio": "It features an integrated battery and a high cutting speed of 2,500 strokes per minute. On a single charge, it can trim a hedge 18″ wide, 262 feet long. This hedge trimmer combines performance, compact design and affordable price."
                },
                {
                    "name": "HSA 56",
                    "shortname": "HSA56",
                    "reknown": "Part of the AK Series, the HSA 56 hedge trimmer is a great option for suburban homeowners.",
                    "bio": "The HSA 56 bundle comes standard with the AK 10 battery and AL 101 battery charger. It features high cutting speeds of 2,800 strokes per minute, slicing through overgrown hedges with minimal vibration. Plus, you can trim the length of over three football fields on a single charge."
                },
                {
                    "name": "HSA 66",
                    "shortname": "HSA66",
                    "reknown": "Part of the AP Series, the HSA 66 hedge trimmer features 36-volt performance and exceptional run times",
                    "bio": "It features optimized blade geometry and diamond-ground blade edges for clean cuts, even through thick and tough shrubbery. The 20” blade length is an efficient working length for most applications and a tip protector helps protect blade tip from damage. The HSA 66 hedge trimmer is a great choice for professionals interested in both controlled sculpting and general hedge trimming tasks."
                },
                {
                    "name": "HTA 65",
                    "shortname": "HTA65",
                    "reknown": "Part of the AP Series",
                    "bio": "The HTA 65 fixed length pole pruner delivers 36 volts of cutting power and exceptional run times. It is also low vibration and lightweight, making it comfortable to handle for extended periods of time. Whether you’re a homeowner in need of occasional tree trimming, or a professional landscaper who uses pole pruners daily, you’ll appreciate everything the HTA 65 has to offer."
                },
                {
                    "name": "HTA 85",
                    "shortname": "HTA85",
                    "reknown": "Part of the AP Series",
                    "bio": "The STIHL HTA 85 telescopic pole pruner offers lightweight, balanced cutting thanks to its brushless, commercial-grade, high-torque electric motor. It offers long run times on a single charge and thanks to its lightweight design and low vibration, it’s also comfortable to use. The HTA 85 telescopes to 12 feet for those tall tree-trimming tasks and requires minimal maintenance."
                },
                {
                    "name": "RMA 370",
                    "shortname": "RMA370",
                    "reknown": "The RMA 370 lawn mower is ideal for small urban lots and homes with limited storage space. ",
                    "bio": "The 16.25-inch deck width makes it highly maneuverable and great for tight spaces. With its high-grade steel blade and five height settings, the RMA 370 cuts at lengths ranging from 1 to 3 inches. And the combination of the blade and the fan wheel above it create a strong air current which lifts the grass for a cleaner, more precise cut. It also features a single-handle height adjustment and a grass catcher. When you are done, the handles fold up for easy storage."
                },
                {
                    "name": "RMA 410",
                    "shortname": "RMA410",
                    "reknown": "The RMA 410 C battery-powered lawn mower delivers power and convenience",
                    "bio": "Featuring 36-volt Lithium-Ion battery technology and quality STIHL engineering, this lawn mower is perfect for homeowners looking for lightweight, no-mess, no-hassle mowing for small to medium sized properties. The RMA 410 C features a brushless, commercial-grade 900-watt electric motor and multiple cutting heights. It also features a single-handle height adjustment and a grass catcher. When you’re done, just fold the handle down for easy storage."
                },
                {
                    "name": "RMA 510",
                    "shortname": "RMA510",
                    "reknown": "Part of the STIHL AP Series",
                    "bio": "The RMA 510 features a 21” deck width and enough runtime with the AP 300 to cut 5,100 square feet of" +
                        " lawn. It also features a grass catcher, a storage slot for a second battery and a single-handle height adjustment so you can set the right height quickly and easily.  This battery-powered lawn mower is a great option for small to medium suburban yards."
                },
                {
                    "name": "TSA 230",
                    "shortname": "TSA230",
                    "reknown": "The TSA 230 STIHL Cutquik® is the world’s first battery-powered cut-off machine.",
                    "bio": "Enjoy instant starting, lightweight maneuverability and solid cutting performance. It can even be used indoors. The TSA 230 also features an onboard water control to help suppress dust. A toolless wheel lock prevents wheel rotation when removing the wheel attachment bolt. Best of all, the TSA 230 provides great value – priced below its gasoline-powered counterparts. Groundbreaking innovation, grounded in quality engineering."
                }
            ];
        }
    }
});
//# sourceMappingURL=component.app.js.map