---
title: bonfire permissions
--- 

## Permissions

/// In this, all permissions are singular. But if its a global permission (not overriden) then it applies to multiple, ofc.
/// Some of these may not be applicable everywhere, if they are not, they are set to `Null`, or the applicable value. 
/// In the following list, the comment displays: 
/// Defult Value (Hub defult and in DM's), Exceptions to the defult what and (where)

| Permission Variable | Defult Value | Exceptions |
| ------------------- | ------------ | ---------- |
| view_channel        | True         | No         |
| view_audit_log      | False        | No         |
| view_message_history | True        | No         | 
| manage_channel      |  False       | No |
| manage_roles        | False        | Yes (DMs, Group Chat: Null) |
| manage_emoji        | False        | No |
| manage_webhooks     | False        | Yes
| manage_bots         | False, Yes (Profile: True) |
| manage_guild        | False        | No |
| manage_alias        | False        | No |
| manage_threads | False | No |
| manage_messages | False | No |
| manage_threads | False | No |
| manage_events | False | No |
| edit_alias | True |  No |
| can_kick  | False | Yes (Group Chats: True) |
| can_ban | False | No |
| can_mute  | False | No |
| can_react | True |  No |
| can_ping_all | False | Yes (Group Chats | DMs: True) |
| can_ping_here | True |  No |
| can_ping_online | True |  No |
| can_ping_random | True |  No |
| can_ping_this | False | No (For roles: can ping this role, for users: can ping me without being a friend) Only Applicable To Roles |
| can_ping_roles | False | No |
| can_move_members | False | No |
| force_voice_mute | False | No |
| force_voice_deafen | False | No |
| create_invite | True | No |
| send_messages | True | Yes (Info Channels: False) |
| create_threads | True | Yes (Info Channels: False) |
| embed_images | True |  No |
| embed_links | True |  No |
| use_external_emoji | True |  No |
| use_commands | True |  No   (You probably don't want this: Instead, configure the commands indevidually) |
| voice_connect | True |  No |
| voice_speak | True |  No |
| voice_video | True |  No |
| voice_activity | True |  No |
| voice_video | True |  No |
| voice_priority | False | No |
| blind_messages | False | No |
| manage_all | False | Yes (Hub Owner: True) |

## Permission Stacks

// Permission stack (Higher levels take priority): 
//
// Administrator (manage_all) will ALWAYS override EVERYTHING ELSE
// Roles (Higher overrides lower, except for manage_all. See more info below)
// Channel Permissions
// Defult hub permissions
// Defult permissions

// Roles stack: 
// Lets say we have someone with two roles: 
//
// Can't Ping: 
//    - Defult
//    - Can't ping anyone
//
// Trusted: 
//    - Defult
//    - Can Ping All
// 
// and someone has both, the can't ping anyone would override it. Any permissions left as defult (passthrough to default/hub), will "shine through".