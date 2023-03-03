import { Router } from 'express';

import {
  readAllCat,
  readCat,
  createCat,
  updateCat,
  updatePartialCat,
  deleteCat
} from './cats.service';

const catsRouter = Router();

// READ 전체 고양이 데이터 조회 -> GET
catsRouter.get('/cats', readAllCat);

// READ 특정 고양이 데이터 조회 -> GET
catsRouter.get('/cats/:id', readCat);

// CREATE 고양이 데이터 생성 -> CREATE
catsRouter.post('/cats', createCat);

// UPDATE 고양이 데이터 전체 업데이트 -> PUT
catsRouter.put('/cats/:id', updateCat);

// UPDATE 고양이 데이터 일부 수정 -> PATCH
catsRouter.patch('/cats/:id', updatePartialCat);

// DELETE 고양이 데이터 삭제 -> DELETE
catsRouter.delete('/cats/:id', deleteCat);

export default catsRouter;
