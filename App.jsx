"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var Spells_1 = require("./src/pages/spells/Spells");
function App() {
    return (<react_native_1.SafeAreaView style={{ padding: 15 }}>
      <react_native_1.StatusBar barStyle={"dark-content"} backgroundColor={"transparent"}/>
      <Spells_1.default />
    </react_native_1.SafeAreaView>);
}
exports.default = App;
