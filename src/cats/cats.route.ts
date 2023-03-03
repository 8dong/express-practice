import { Router } from 'express';

import { Cat } from './cats.model';

const catsRouter = Router();

// READ 전체 고양이 데이터 조회 -> GET
catsRouter.get('/cats', (req, res) => {
  try {
    const cats = Cat;
    res.status(200).send({
      success: true,
      data: cats
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message
    });
  }
});

// READ 특정 고양이 데이터 조회 -> GET
catsRouter.get('/cats/:id', (req, res) => {
  try {
    const catId = req.params.id;
    const cat = Cat.find((cat) => cat.id === catId);

    if (!cat) throw new Error('cat not found');

    res.status(200).send({
      success: true,
      data: cat
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message
    });
  }
});

// CREATE 고양이 데이터 생성 -> CREATE
catsRouter.post('/cats', (req, res) => {
  try {
    const data = req.body;
    Cat.push(data);

    res.status(201).send({
      success: true,
      data
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message
    });
  }
});

// UPDATE 고양이 데이터 전체 업데이트 -> PUT
catsRouter.put('/cats/:id', (req, res) => {
  try {
    const params = req.params;
    const body = req.body;
    let result;

    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        cat = body;
        result = cat;
      }
    });

    res.status(200).send({
      success: true,
      data: result
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message
    });
  }
});

// UPDATE 고양이 데이터 일부 수정 -> PATCH
catsRouter.patch('/cats/:id', (req, res) => {
  try {
    const params = req.params;
    const body = req.body;
    let result;

    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        cat = { ...cat, ...body };
        result = cat;
      }
    });

    res.status(200).send({
      success: true,
      data: result
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message
    });
  }
});

// DELETE 고양이 데이터 삭제 -> DELETE
catsRouter.delete('/cats/:id', (req, res) => {
  try {
    const params = req.params;
    const newCat = Cat.filter((cat) => cat.id !== params.id);

    res.status(200).send({
      success: true,
      data: newCat
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message
    });
  }
});

export default catsRouter;
