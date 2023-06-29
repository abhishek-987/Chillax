import { Text, SafeAreaView, Button } from "react-native"

const Signup = ({navigation}) => {
    return (
            <><Text>hello this is abhishek</Text>
            
                <Button 
                    title="stacking"
                    onPress={ () => {
                        navigation.pop();
                    }}
                
                />
            
            
            </>
    )
}


export default Signup