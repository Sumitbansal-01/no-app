/**
 * @openapi
 * '/uploadCsv':
 *  post:
 *     tags:
 *     - File
 *     summary: To upload a csv file
 *     requestBody:
 *      required: true
 *      content:
 *        multipart/form-data:
 *           schema:
 *            type: object
 *            required:
 *              - csvFile
 *            properties:
 *              csvFile:
 *                  type: array
 *                  items:
 *                   type: string
 *                   format: binary
 *     responses:
 *       200:
 *          description: Success
 *       400:
 *          description: Bad Request
 *       500:
 *          description: Server Error
 */
