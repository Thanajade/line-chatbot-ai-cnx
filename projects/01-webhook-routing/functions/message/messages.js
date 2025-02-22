exports.welcomeMessage = (profile) => {
    return {
        "type": "text",
        "text": `ยินดีต้อนรับคุณ ${profile.displayName}`,
        "sender": { // manage sender image toggle BOT or Admin user
            "name": "BOT",
            "iconUrl": "https://cdn-icons-png.flaticon.com/512/10176/10176915.png "
        },
        "quickReply": { // Max 13 items
            "items": [{
                "type": "action",
                "action": {
                    "type": "message",
                    "label": "Yes",
                    "text": "Yes"
                }
            },
            {
                "type": "action",
                "action": {
                    "type": "uri",
                    "label": "Phone order",
                    "uri": "tel:09001234567"
                }
            },
            {
                "type": "action",
                "action": {
                    "type": "datetimepicker",
                    "label": "Select date",
                    "data": "storeId=12345",
                    "mode": "date",
                    "initial": "2024-08-25",
                    "min": "2024-08-01",
                    "max": "2024-12-31"
                }

            },
            {
                "type": "action",
                "action": {
                    "type": "clipboard",
                    "label": "Copy",
                    "clipboardText": "3B48740B"
                }
            },
            {
                "type": "action",
                "action": {
                    "type": "cameraRoll",
                    "label": "Send photo"
                }
            },
            {
                "type": "action",
                "action": {
                    "type": "camera",
                    "label": "Open camera"
                }
            }
            ]
        }
    }
}