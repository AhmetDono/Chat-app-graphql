export const Message = {
    sender: async (parent, _, { db }) => {
      if (!parent.sender) return null;
      return await db.User.findById(parent.sender);
    },
    receiver: async (parent, _, { db }) => {
      if (!parent.receiver) return null;
      return await db.User.findById(parent.receiver);
    }
  };

  