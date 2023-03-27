function sendMessage(message) {
    firebase
      .database()
      .ref("messages")
      .push({
        message: message,
        timestamp: Date.now(),
      })
      .then(() => console.log("Message sent successfully!"))
      .catch((error) => console.error("Error sending message: ", error));
  }

function testPush() {
    const [message, setMessage] = useState("");
  
    function handleSendMessage() {
      sendMessage(message);
      setMessage("");
    }
  
    return (
      <View>
        <TextInput
          value={message}
          onChangeText={setMessage}
          placeholder="Enter a message"
        />
        <Button title="Send" onPress={handleSendMessage} />
      </View>
    );
  }
  export default testPush;