export const sampleUsers = [
  {
    id: "yhn4bsd",
    wallet: "0x1234...5678",
    currentPlan: "Diamond",
    activeUntil: "March 1, 2025, 11:54 PM",
    monthlyEarnings: "3,500 BUSD",
    monthlyEarningsChange: "+12.5% from last month",
    totalEarnings: "42,000 BUSD",
    referredUsers: ["abc123", "def456", "ghi789"],
    bronzeMembers: ["jkl012", "mno345"],
    goldMembers: ["pqr678", "stu901"],
    diamondMembers: ["vwx234", "yz567"]
  },
  {
    id: "abc123",
    wallet: "0x5678...9012",
    currentPlan: "Gold",
    activeUntil: "April 15, 2025, 10:30 AM",
    monthlyEarnings: "2,800 BUSD",
    monthlyEarningsChange: "+8.3% from last month",
    totalEarnings: "35,000 BUSD",
    referredUsers: ["def456", "ghi789"],
    bronzeMembers: ["jkl012"],
    goldMembers: ["mno345"],
    diamondMembers: ["pqr678"]
  },
  // Add more sample users as needed
];

export const getRandomUsers = (count: number) => {
  const shuffled = [...sampleUsers].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const getUserById = (id: string) => {
  return sampleUsers.find(user => user.id === id);
};