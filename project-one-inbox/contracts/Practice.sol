pragma solidity ^0.4.17;

contract Practice {
  string public message;

  function Practice(string initialMessage) public{
    message = initialMessage;
  }

  function setMessage(string newMessage) public{
    message = newMessage;
  }
}