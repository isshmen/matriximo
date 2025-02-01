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
  {
    id: "def456",
    wallet: "0x9012...3456",
    currentPlan: "Diamond",
    activeUntil: "May 20, 2025, 3:15 PM",
    monthlyEarnings: "4,200 BUSD",
    monthlyEarningsChange: "+15.2% from last month",
    totalEarnings: "48,000 BUSD",
    referredUsers: ["ghi789", "jkl012"],
    bronzeMembers: ["mno345", "pqr678"],
    goldMembers: ["stu901", "vwx234"],
    diamondMembers: ["yz567", "abc123"]
  },
  {
    id: "ghi789",
    wallet: "0x3456...7890",
    currentPlan: "Bronze",
    activeUntil: "June 5, 2025, 8:45 AM",
    monthlyEarnings: "1,500 BUSD",
    monthlyEarningsChange: "+5.7% from last month",
    totalEarnings: "18,000 BUSD",
    referredUsers: ["jkl012", "mno345"],
    bronzeMembers: ["pqr678"],
    goldMembers: ["stu901"],
    diamondMembers: []
  },
  {
    id: "jkl012",
    wallet: "0x7890...1234",
    currentPlan: "Gold",
    activeUntil: "July 10, 2025, 1:20 PM",
    monthlyEarnings: "3,100 BUSD",
    monthlyEarningsChange: "+10.1% from last month",
    totalEarnings: "37,000 BUSD",
    referredUsers: ["mno345", "pqr678"],
    bronzeMembers: ["stu901", "vwx234"],
    goldMembers: ["yz567"],
    diamondMembers: ["abc123"]
  }
];

export const getRandomUsers = (count: number) => {
  const shuffled = [...sampleUsers].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const getUserById = (id: string) => {
  return sampleUsers.find(user => user.id === id);
};