import { Request, Response } from 'express';
import { selectedGift } from '../services/userGiftsService';
import { GIFT_MESSAGE } from '../constants/giftMessages';

const selectGift = (req: Request, res: Response) => {
  const data = req.body;
  const session = req.session;

  try {
    selectedGift(session, data);
    res.sendStatus(201).json({ success: GIFT_MESSAGE.SELECTED_GIFTS });
  } catch (error) {
    res.sendStatus(500).json({ error: GIFT_MESSAGE.INTERNAL_SERVER_ERROR });
  }
};

export default selectGift;
