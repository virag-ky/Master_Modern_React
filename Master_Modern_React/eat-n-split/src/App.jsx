import { useState } from "react";

/* eslint-disable react/prop-types */
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  function handleSelection(friend) {
    setSelectedFriend(friend);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} onSelection={handleSelection} />

        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}

        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>
      {selectedFriend && <FormSplitBill />}
    </div>
  );
}

function FriendsList({ friends, onSelection }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend} onSelection={onSelection} />
      ))}
    </ul>
  );
}

function Friend({ friend, onSelection }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}&euro;
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}&euro;
        </p>
      )}
      {friend.balance === 0 && (
        <p className="">You and {friend.name} are equal</p>
      )}
      <Button onClick={() => onSelection(friend)}>Select</Button>
    </li>
  );
}

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      name,
      image: `${image}?=${id}`,
      balance: 0,
      id,
    };

    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label htmlFor="friend-name">👭 Friend name</label>
      <input
        type="text"
        name="friend-name"
        id="friend-name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="image">🌄 Image URL</label>
      <input
        type="text"
        id="image"
        name="image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with X</h2>
      <label htmlFor="bill-value">💰 Bill value</label>
      <input type="text" name="bill-value" id="bill-value" />

      <label htmlFor="user-expense">🧍🏻‍♀️ Your expense</label>
      <input type="text" name="user-expense" id="user-expense" />

      <label htmlFor="friend-expense">👭 X's expense</label>
      <input type="text" name="friend-expense" id="friend-expense" disabled />

      <label htmlFor="who-pays">🤑 Who is paying the bill</label>
      <select name="who-pays" id="who-pays">
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}

export default App;
