
use blog;
INSERT INTO `menus` VALUES (2, '控制台', 0, '/', '首页', '2019-9-25 09:07:38');
INSERT INTO `menus` VALUES (3, '文章管理', 0, '', '', '2019-9-25 11:40:56');
INSERT INTO `menus` VALUES (4, '标签管理', 0, '/tag', '', '2019-9-25 11:41:08');
INSERT INTO `menus` VALUES (5, '用户管理', 0, '', '', '2019-9-25 11:41:24');
INSERT INTO `menus` VALUES (6, '系统管理', 0, '', '', '2019-9-25 11:41:31');
INSERT INTO `menus` VALUES (7, '文章列表', 3, '/article/list', '', '2019-9-25 11:42:19');
INSERT INTO `menus` VALUES (8, '发布文章', 3, '/article/add', '', '2019-9-25 11:47:13');
INSERT INTO `menus` VALUES (9, '角色管理', 5, '/user/role', '', '2019-9-25 11:48:28');
INSERT INTO `menus` VALUES (10, '菜单管理', 5, '/user/menu', '', '2019-9-25 11:48:53');
INSERT INTO `menus` VALUES (11, '系统日志', 6, '/system/logs', '', '2019-9-25 11:49:13');
INSERT INTO `menus` VALUES (12, '用户管理', 5, '/user/index', '', '2019-9-25 11:52:10');

INSERT INTO `role_menus` VALUES (9, 2, 2);
INSERT INTO `role_menus` VALUES (10, 3, 2);
INSERT INTO `role_menus` VALUES (11, 7, 2);
INSERT INTO `role_menus` VALUES (12, 8, 2);
INSERT INTO `role_menus` VALUES (13, 5, 2);
INSERT INTO `role_menus` VALUES (14, 9, 2);
INSERT INTO `role_menus` VALUES (15, 4, 2);
INSERT INTO `role_menus` VALUES (16, 10, 2);
INSERT INTO `role_menus` VALUES (17, 12, 2);
INSERT INTO `role_menus` VALUES (18, 6, 2);
INSERT INTO `role_menus` VALUES (19, 11, 2);

INSERT INTO `roles` VALUES (2, '超级管理员', '2019-9-19 11:54:54', '');
INSERT INTO `roles` VALUES (3, '管理员', '2019-9-19 11:55:09', '');
INSERT INTO `roles` VALUES (4, '普通用户', '2019-9-19 11:55:17', '');

INSERT INTO `tags` VALUES (1, 'Vue', '2019-11-28 14:54:51');
INSERT INTO `tags` VALUES (2, 'React', '2019-11-28 14:54:58');
INSERT INTO `tags` VALUES (3, 'NodeJs', '2019-11-28 14:55:09');

INSERT INTO `user_roles` VALUES (2, 1, 2);

INSERT INTO `users` VALUES (1, 'admin', 'e10adc3949ba59abbe56e057f20f883e', '838913982@qq.com', '2019-9-17 16:41:14', '2019-11-28 15:58:31');
