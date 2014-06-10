/*
* Copyright (c) 2013 BlackBerry Limited
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var _self = {},
	_ID = "com.blackberry.community.googleanalyticsplugin",
	exec = cordova.require("cordova/exec");

    // UUID, GA account and app name are required for sending any tracking.
    // Note: Google documentation says app name is optional, but without it doesn't work.

    // Unique user ID for tracking
    Object.defineProperty(_self, "UUID", {
        get: function () {
            var result,
                success = function (data, response) {
                    result = data;
                },
                fail = function (data, response) {
                    console.log("Error: " + data);
                };
            exec(success, fail, _ID, "UUID", null);
            return result;
        },
        set: function (arg) {
            var result,
                success = function (data, response) {
                    result = data;
                },
                fail = function (data, response) {
                    console.log("Error: " + data);
                };
            exec(success, fail, _ID, "UUID", {"value": arg });
            return result;
        }
    });

    // Google Analytics account
    Object.defineProperty(_self, "GAaccount", {
        get: function () {
            var result,
                success = function (data, response) {
                    result = data;
                },
                fail = function (data, response) {
                    console.log("Error: " + data);
                };
            exec(success, fail, _ID, "GAaccount", null);
            return result;
        },
        set: function (arg) {
            var result,
                success = function (data, response) {
                    result = data;
                },
                fail = function (data, response) {
                    console.log("Error: " + data);
                };
            exec(success, fail, _ID, "GAaccount", {"value": arg });
            return result;
        }
    });

    // App name
    Object.defineProperty(_self, "AppName", {
        get: function () {
            var result,
                success = function (data, response) {
                    result = data;
                },
                fail = function (data, response) {
                    console.log("Error: " + data);
                };
            exec(success, fail, _ID, "AppName", null);
            return result;
        },
        set: function (arg) {
            var result,
                success = function (data, response) {
                    result = data;
                },
                fail = function (data, response) {
                    console.log("Error: " + data);
                };
            exec(success, fail, _ID, "AppName", {"value": arg });
            return result;
        }
    });


    // Different types of tracking for GA
    // All tracking functions return true if tracking request is successful.

    // Pageview, &t=pageview, pageURL required
    _self.trackPageview = function (pageURL, pageTitle, hostName) {
        var result = false;

        if (pageURL)
        {
            pageTitle = pageTitle || "";
            hostName = hostName || "";
            var success = function (data, response) {
                    result = true;
                },
                fail = function (data, response) {
                    console.log("Error: " + data);
                    result = false;
                };
            exec(success, fail, _ID, "trackPageview", {
                "pageURL": pageURL, 
                "pageTitle": pageTitle,
                "hostName": hostName 
            });
        }
        return result;
    };  

    // Event tracking, &t=event, Category and action are required
    _self.trackEvent = function (eventCategory, eventAction, eventLabel, eventValue) {
        var result = false,

        if (eventCategory && eventAction)
        {
            eventLabel = eventLabel || "";
            eventValue = eventValue || "";
            var success = function (data, response) {
                    result = true;
                },
                fail = function (data, response) {
                    console.log("Error: " + data);
                    result = false;
                };
            exec(success, fail, _ID, "trackEvent", { 
                "eventCategory": eventCategory,
                "eventAction": eventAction,
                "eventLabel": eventLabel,
                "eventValue": eventValue
            });
        }
        return result;
    };

    // Transaction tracking
    // ID is required, others optional
    _self.trackTransaction = function (tID, tAffil, tRevenue, tShipn, tTax, tCurr) {
        var result = false,

        if (tID)
        {
            tAffil = tAffil || "";
            tRevenue = tRevenue || "";
            tShipn = tShipn || "";
            tTax = tTax || "";
            tCurr = tCurr || "";
            
            var success = function (data, response) {
                    result = true;
                },
                fail = function (data, response) {
                    console.log("Error: " + data);
                    result = false;
                };
            exec(success, fail, _ID, "trackEvent", { 
                    "tID": tID,
                    "tAffil": tAffil,
                    "tRevenue": tRevenue,
                    "tShipn": tShipn,
                    "tTax": tTax,
                    "tCurr": tCurr
                });
        }
        return result;
    };


    // Item hit tracking,
    // tID & iName is required, others optional
    _self.trackItem = function (tID, iName, iPrice, iQuant) {
        var result = false,

        if (tID && iName)
        {
            iPrice = iPrice || "";
            iQuant = iQuant || "";
            
            var success = function (data, response) {
                    result = true;
                },
                fail = function (data, response) {
                    console.log("Error: " + data);
                    result = false;
                };
            exec(success, fail, _ID, "trackEvent", { 
                    "tID": tID,
                    "iName": iName,
                    "iPrice": iPrice,
                    "iQuant": iQuant
                });
        }
        return result;
    };

module.exports = _self;