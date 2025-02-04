export const sampleUsers = [
  {
    id: "member1",
    wallet: "0x1234...5678",
    currentPlan: "Diamond",
    activeUntil: "March 1, 2025",
    monthlyEarnings: "3,500 BUSD",
    monthlyEarningsChange: "+12.5% from last month",
    totalEarnings: "42,000 BUSD",
    referredUsers: ["member2", "member3", "member4"],
    bronzeMembers: ["member2"],
    goldMembers: ["member3"],
    diamondMembers: ["member4"],
    activities: [
      {
        id: "member2",
        date: "2024-02-15",
        plan: "Bronze",
        activeUntil: "2025-02-15",
        transactionHash: "0x123...abc"
      },
      {
        id: "member3",
        date: "2024-02-10",
        plan: "Gold",
        activeUntil: "2025-02-10",
        transactionHash: "0x456...def"
      },
      {
        id: "member4",
        date: "2024-02-05",
        plan: "Diamond",
        activeUntil: "2025-02-05",
        transactionHash: "0x789...ghi"
      }
    ]
  },
  {
    id: "member2",
    wallet: "0x2345...6789",
    currentPlan: "Bronze",
    activeUntil: "April 15, 2025",
    monthlyEarnings: "1,200 BUSD",
    monthlyEarningsChange: "+5.3% from last month",
    totalEarnings: "15,000 BUSD",
    referredUsers: ["member5", "member6"],
    bronzeMembers: ["member5"],
    goldMembers: ["member6"],
    diamondMembers: [],
    activities: [
      {
        id: "member5",
        date: "2024-02-12",
        plan: "Bronze",
        activeUntil: "2025-02-12",
        transactionHash: "0xabc...123"
      },
      {
        id: "member6",
        date: "2024-02-08",
        plan: "Gold",
        activeUntil: "2025-02-08",
        transactionHash: "0xdef...456"
      }
    ]
  },
  {
    id: "member3",
    wallet: "0x3456...7890",
    currentPlan: "Gold",
    activeUntil: "May 20, 2025",
    monthlyEarnings: "2,800 BUSD",
    monthlyEarningsChange: "+8.2% from last month",
    totalEarnings: "35,000 BUSD",
    referredUsers: ["member7", "member8"],
    bronzeMembers: ["member7"],
    goldMembers: [],
    diamondMembers: ["member8"],
    activities: [
      {
        id: "member7",
        date: "2024-02-14",
        plan: "Bronze",
        activeUntil: "2025-02-14",
        transactionHash: "0xghi...789"
      },
      {
        id: "member8",
        date: "2024-02-09",
        plan: "Diamond",
        activeUntil: "2025-02-09",
        transactionHash: "0xjkl...012"
      }
    ]
  },
  {
    id: "member4",
    wallet: "0x4567...8901",
    currentPlan: "Diamond",
    activeUntil: "June 5, 2025",
    monthlyEarnings: "4,200 BUSD",
    monthlyEarningsChange: "+15.2% from last month",
    totalEarnings: "48,000 BUSD",
    referredUsers: ["member9", "member10"],
    bronzeMembers: ["member9"],
    goldMembers: ["member10"],
    diamondMembers: [],
    activities: [
      {
        id: "member9",
        date: "2024-02-13",
        plan: "Bronze",
        activeUntil: "2025-02-13",
        transactionHash: "0xmno...345"
      },
      {
        id: "member10",
        date: "2024-02-07",
        plan: "Gold",
        activeUntil: "2025-02-07",
        transactionHash: "0xpqr...678"
      }
    ]
  },
  {
    id: "member5",
    wallet: "0x5678...9012",
    currentPlan: "Bronze",
    activeUntil: "July 10, 2025",
    monthlyEarnings: "1,500 BUSD",
    monthlyEarningsChange: "+4.7% from last month",
    totalEarnings: "18,000 BUSD",
    referredUsers: [],
    bronzeMembers: [],
    goldMembers: [],
    diamondMembers: [],
    activities: []
  },
  {
    id: "member6",
    wallet: "0x6789...0123",
    currentPlan: "Gold",
    activeUntil: "August 15, 2025",
    monthlyEarnings: "2,900 BUSD",
    monthlyEarningsChange: "+9.1% from last month",
    totalEarnings: "36,000 BUSD",
    referredUsers: [],
    bronzeMembers: [],
    goldMembers: [],
    diamondMembers: [],
    activities: []
  },
  {
    id: "member7",
    wallet: "0x7890...1234",
    currentPlan: "Bronze",
    activeUntil: "September 20, 2025",
    monthlyEarnings: "1,300 BUSD",
    monthlyEarningsChange: "+3.8% from last month",
    totalEarnings: "16,000 BUSD",
    referredUsers: [],
    bronzeMembers: [],
    goldMembers: [],
    diamondMembers: [],
    activities: []
  },
  {
    id: "member8",
    wallet: "0x8901...2345",
    currentPlan: "Diamond",
    activeUntil: "October 25, 2025",
    monthlyEarnings: "4,100 BUSD",
    monthlyEarningsChange: "+14.5% from last month",
    totalEarnings: "45,000 BUSD",
    referredUsers: [],
    bronzeMembers: [],
    goldMembers: [],
    diamondMembers: [],
    activities: []
  },
  {
    id: "member9",
    wallet: "0x9012...3456",
    currentPlan: "Bronze",
    activeUntil: "November 30, 2025",
    monthlyEarnings: "1,400 BUSD",
    monthlyEarningsChange: "+4.2% from last month",
    totalEarnings: "17,000 BUSD",
    referredUsers: [],
    bronzeMembers: [],
    goldMembers: [],
    diamondMembers: [],
    activities: []
  },
  {
    id: "member10",
    wallet: "0x0123...4567",
    currentPlan: "Gold",
    activeUntil: "December 5, 2025",
    monthlyEarnings: "3,000 BUSD",
    monthlyEarningsChange: "+10.3% from last month",
    totalEarnings: "37,000 BUSD",
    referredUsers: [],
    bronzeMembers: [],
    goldMembers: [],
    diamondMembers: [],
    activities: []
  }
];

const networkMembers = [
  {
    id: "member10",
    plan: "Diamond",
    date: "25.01.2025, 11:53 PM",
    invitedBy: "member1",
    transactionHash: "0x123...456"
  },
  {
    id: "member9",
    plan: "Gold",
    date: "24.01.2025, 10:30 PM",
    invitedBy: "member2",
    transactionHash: "0x789...012"
  },
  {
    id: "member8",
    plan: "Bronze",
    date: "23.01.2025, 09:15 PM",
    invitedBy: "member3",
    transactionHash: "0xabc...345"
  }
];

export const sampleUsers = [
  {
    id: "member1",
    wallet: "0x1234...5678",
    currentPlan: "Diamond",
    activeUntil: "March 1, 2025",
    monthlyEarnings: "3,500 BUSD",
    monthlyEarningsChange: "+12.5% from last month",
    totalEarnings: "42,000 BUSD",
    referredUsers: ["member2", "member3", "member4"],
    bronzeMembers: ["member2"],
    goldMembers: ["member3"],
    diamondMembers: ["member4"],
    networkMembers: networkMembers,
    activities: [
      {
        id: "member2",
        date: "2024-02-15",
        plan: "Bronze",
        activeUntil: "2025-02-15",
        transactionHash: "0x123...abc"
      },
      {
        id: "member3",
        date: "2024-02-10",
        plan: "Gold",
        activeUntil: "2025-02-10",
        transactionHash: "0x456...def"
      },
      {
        id: "member4",
        date: "2024-02-05",
        plan: "Diamond",
        activeUntil: "2025-02-05",
        transactionHash: "0x789...ghi"
      }
    ]
  },
  {
    id: "member2",
    wallet: "0x2345...6789",
    currentPlan: "Bronze",
    activeUntil: "April 15, 2025",
    monthlyEarnings: "1,200 BUSD",
    monthlyEarningsChange: "+5.3% from last month",
    totalEarnings: "15,000 BUSD",
    referredUsers: ["member5", "member6"],
    bronzeMembers: ["member5"],
    goldMembers: ["member6"],
    diamondMembers: [],
    networkMembers: networkMembers,
    activities: [
      {
        id: "member5",
        date: "2024-02-12",
        plan: "Bronze",
        activeUntil: "2025-02-12",
        transactionHash: "0xabc...123"
      },
      {
        id: "member6",
        date: "2024-02-08",
        plan: "Gold",
        activeUntil: "2025-02-08",
        transactionHash: "0xdef...456"
      }
    ]
  },
  {
    id: "member3",
    wallet: "0x3456...7890",
    currentPlan: "Gold",
    activeUntil: "May 20, 2025",
    monthlyEarnings: "2,800 BUSD",
    monthlyEarningsChange: "+8.2% from last month",
    totalEarnings: "35,000 BUSD",
    referredUsers: ["member7", "member8"],
    bronzeMembers: ["member7"],
    goldMembers: [],
    diamondMembers: ["member8"],
    networkMembers: networkMembers,
    activities: [
      {
        id: "member7",
        date: "2024-02-14",
        plan: "Bronze",
        activeUntil: "2025-02-14",
        transactionHash: "0xghi...789"
      },
      {
        id: "member8",
        date: "2024-02-09",
        plan: "Diamond",
        activeUntil: "2025-02-09",
        transactionHash: "0xjkl...012"
      }
    ]
  },
  {
    id: "member4",
    wallet: "0x4567...8901",
    currentPlan: "Diamond",
    activeUntil: "June 5, 2025",
    monthlyEarnings: "4,200 BUSD",
    monthlyEarningsChange: "+15.2% from last month",
    totalEarnings: "48,000 BUSD",
    referredUsers: ["member9", "member10"],
    bronzeMembers: ["member9"],
    goldMembers: ["member10"],
    diamondMembers: [],
    networkMembers: networkMembers,
    activities: [
      {
        id: "member9",
        date: "2024-02-13",
        plan: "Bronze",
        activeUntil: "2025-02-13",
        transactionHash: "0xmno...345"
      },
      {
        id: "member10",
        date: "2024-02-07",
        plan: "Gold",
        activeUntil: "2025-02-07",
        transactionHash: "0xpqr...678"
      }
    ]
  },
  {
    id: "member5",
    wallet: "0x5678...9012",
    currentPlan: "Bronze",
    activeUntil: "July 10, 2025",
    monthlyEarnings: "1,500 BUSD",
    monthlyEarningsChange: "+4.7% from last month",
    totalEarnings: "18,000 BUSD",
    referredUsers: [],
    bronzeMembers: [],
    goldMembers: [],
    diamondMembers: [],
    networkMembers: networkMembers,
    activities: []
  },
  {
    id: "member6",
    wallet: "0x6789...0123",
    currentPlan: "Gold",
    activeUntil: "August 15, 2025",
    monthlyEarnings: "2,900 BUSD",
    monthlyEarningsChange: "+9.1% from last month",
    totalEarnings: "36,000 BUSD",
    referredUsers: [],
    bronzeMembers: [],
    goldMembers: [],
    diamondMembers: [],
    networkMembers: networkMembers,
    activities: []
  },
  {
    id: "member7",
    wallet: "0x7890...1234",
    currentPlan: "Bronze",
    activeUntil: "September 20, 2025",
    monthlyEarnings: "1,300 BUSD",
    monthlyEarningsChange: "+3.8% from last month",
    totalEarnings: "16,000 BUSD",
    referredUsers: [],
    bronzeMembers: [],
    goldMembers: [],
    diamondMembers: [],
    networkMembers: networkMembers,
    activities: []
  },
  {
    id: "member8",
    wallet: "0x8901...2345",
    currentPlan: "Diamond",
    activeUntil: "October 25, 2025",
    monthlyEarnings: "4,100 BUSD",
    monthlyEarningsChange: "+14.5% from last month",
    totalEarnings: "45,000 BUSD",
    referredUsers: [],
    bronzeMembers: [],
    goldMembers: [],
    diamondMembers: [],
    networkMembers: networkMembers,
    activities: []
  },
  {
    id: "member9",
    wallet: "0x9012...3456",
    currentPlan: "Bronze",
    activeUntil: "November 30, 2025",
    monthlyEarnings: "1,400 BUSD",
    monthlyEarningsChange: "+4.2% from last month",
    totalEarnings: "17,000 BUSD",
    referredUsers: [],
    bronzeMembers: [],
    goldMembers: [],
    diamondMembers: [],
    networkMembers: networkMembers,
    activities: []
  },
  {
    id: "member10",
    wallet: "0x0123...4567",
    currentPlan: "Gold",
    activeUntil: "December 5, 2025",
    monthlyEarnings: "3,000 BUSD",
    monthlyEarningsChange: "+10.3% from last month",
    totalEarnings: "37,000 BUSD",
    referredUsers: [],
    bronzeMembers: [],
    goldMembers: [],
    diamondMembers: [],
    networkMembers: networkMembers,
    activities: []
  }
];

export const getRandomUsers = (count: number) => {
  const shuffled = [...sampleUsers].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const getUserById = (id: string) => {
  return sampleUsers.find(user => user.id === id);
};
