// Async operation in loop

// 1
async function findOrCreateUser(id) {
  const user = await findUser(id);
  if (!user) {
    return await createUser(id);
  }
  return user;
}

async function run(idList) {
  let userList = [];
  for await (const id of idList) {
    const user = await findOrCreateUser(id);
    userList.push(user);
  }
}

// 2
async function findOrCreateUser(id) {
  const user = await findUser(id);
  if (!user) {
    return await createUser(id);
  }
  return user;
}

async function getUsers(idList) {
  const promiseTasks = idList.map((id) => findOrCreateUser(id));
  const users = await Promise.all(promiseTasks);
  return users;
}

// 3 make concurrent request limited to specific number // stop using Promise.all() ex.: when it's call to db with huge number of requests
async function findOrCreateUser(id) {
  const user = await findUser(id);
  if (!user) {
    return await createUser(id);
  }
  return user;
}

async function getUsers(idList) {
  const { results, errors } = await PromisePool.for(idList)
    .withConcurrency(100)
    .process(findOrCreateUser);

  return results;
}
