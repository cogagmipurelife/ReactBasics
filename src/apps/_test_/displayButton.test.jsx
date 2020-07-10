import React from "react";
import {create} from "react-test-renderer";
function Button(props){
return <buton> only for testing </buton>;
}
describe("Button", () => {
    test("Matches", ()=> 
    {
        const button =create(<Button/>);
        expect(button.toJSON()).toMatchSnapshot();
    }   );
});