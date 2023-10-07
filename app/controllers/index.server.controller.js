/* File: index.server.controller.js */
/* Student: Sujina Basyal */
/* Student ID: 301281848 */
/* Date: October 3, 2023 */
exports.render = function (req, res) {
    res.render('index', {
        title: 'New Express Application'
    })
};
